import MovableElements from "../classes/movableElements.js";


class OpenFile extends MovableElements {

    constructor(buttonElement, canvas, canvasElement, elementToCreate) {
        super(buttonElement, canvas, canvasElement, elementToCreate)
    }
    

    checkSizeImage(image) {
        const canvasHeight = this.canvas.canvasArea.clientHeight;
        const canvasWidth = this.canvas.canvasArea.clientWidth;
        const imageWidth = image.naturalWidth;
        const imageHeight = image.naturalHeight;

        if(imageWidth > canvasWidth || imageHeight > canvasHeight) {
            const widthRatio = canvasWidth / imageWidth;
            const heightRatio = canvasHeight / imageHeight;

            const toatlSizeRatio = Math.min(widthRatio, heightRatio); //it always will be fraction, smaller fraction will show longer side of image;
            //to properly scale, it have be scaled by ratio of longer side

            return {
                x: imageWidth * toatlSizeRatio - 20, // "20" width of margin
                y: imageHeight * toatlSizeRatio - 20
            }
        } else {
            return {
                x: imageWidth,
                y: imageHeight
            }
        }
    }

    clearFileInStorage() {
        this.element.value = "";
    }
    
    
    loadFile() {
        let loadEventHandler;
        this.createContentElement();

        const file = this.element.files[0];
        const reader = new FileReader();
        
        reader.readAsDataURL(file);

        reader.onload = function() {
            this.elementToDraw.src = reader.result;
        }.bind(this);

        this.elementToDraw.onload = function() {
            const imageSize = this.checkSizeImage(this.elementToDraw);
            this.elementToDraw.style.width = `${imageSize.x}px`;
            this.elementToDraw.style.height = `${imageSize.y}px`;

            this.showContentElement();
        }.bind(this)
        

        this.canvasElement.addEventListener("click", loadEventHandler = (e) => {

            const positionToDraw = this.checkPositionOfElement();
            this.deleteContentElement();
            this.canvas.ctx.drawImage(this.elementToDraw, positionToDraw.x, positionToDraw.y, positionToDraw.width, positionToDraw.height);

            this.clearFileInStorage();
            this.canvas.saveToHistory();
            this.canvasElement.removeEventListener(e.type, loadEventHandler);
        });
    }
}

export default OpenFile;