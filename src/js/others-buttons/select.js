import AdvancedTools from "../classes/advancedTools.js";

class SelectCanvasArea extends AdvancedTools {
    constructor(buttonElement, canvas, canvasElement, elementToCreate) {
        super(buttonElement, canvas, canvasElement, elementToCreate);
        this.copyMemory;
        this.button = this.element.selectTool;
    }

    removeSelection() {
        this.deleteContentElement();
        this.disableCopyButtons(); 
    }

    //// ---------  COPY / PASTE / CUT BUTTONS ----------- /////
    enablePasteButton() {
        this.element.pasteTool.removeAttribute("disabled");
        this.element.pasteTool.classList.remove("menu__button--disabled");
    }

    enableCopyButtons() {
        this.element.copyTool.removeAttribute("disabled");
        this.element.cutTool.removeAttribute("disabled");
        this.element.copyTool.classList.remove("menu__button--disabled");
        this.element.cutTool.classList.remove("menu__button--disabled");
    }

    disableCopyButtons() {
        this.element.copyTool.setAttribute("disabled", "disabled");
        this.element.cutTool.setAttribute("disabled", "disabled");
        this.element.copyTool.classList.add("menu__button--disabled");
        this.element.cutTool.classList.add("menu__button--disabled");
    }

    copySelectedArea() {
        const areaPositionToCopy = this.checkPositionOfElement();
        this.copyMemory = this.canvas.ctx.getImageData(areaPositionToCopy.x, areaPositionToCopy.y, areaPositionToCopy.width, areaPositionToCopy.height);
        this.enablePasteButton();

        return areaPositionToCopy;
    }

    cutSelectedArea() {
        const cordsToClear = this.copySelectedArea();
        this.canvas.ctx.clearRect(cordsToClear.x, cordsToClear.y, cordsToClear.width, cordsToClear.height);
    }

    loadCopiedImg() {
        this.createContentElement("img");
        console.dir(this.copyMemory.length)
        this.elementToDraw.src = this.copyMemory;

        var imageArr = this.copyMemory.data
        var imageData = this.copyMemory; //Your image data array
        var images = []; //completed images
        
        for (let i = 0; i < imageArr.length; i++) { //Each block of canvas image
            var temp = "";
            for (let j = 0; j < imageArr[i].length; j++) { //Each byte
                temp += String.fromCharCode(imageArr[i][j]);
                console.log(temp);
            }
            // var encoded = generatePng(imageArr[i].width, imageArr[i].height, temp);
            // images.push("data:image/png;base64," + btoa(encoded)); //Push to final array
        }
        console.dir(images)
        
    }

    pasteCopiedArea() {
        this.canvas.ctx.putImageData(this.copyMemory, 0, 0);
        this.removeSelection();
        this.loadCopiedImg();
        this.canvas.saveToHistory();
    }

    //// ---------  EVENTS ----------- /////



    bindEvents() {
        this.canvasElement.addEventListener("mousedown", this.mdownEventHandler = e => {

            if (this.toolIsActive) {
                this.removeSelection();
                this.toolIsActive = false;
            } else {
                this.createContentElement();
                this.showContentElement(e);
                this.enableCopyButtons();
                this.initResizeEvent(e, this.elementToDraw.parentElement);
                this.toolIsActive = true;
            }
        });
    }

    unbindEvents() {
        this.canvasElement.removeEventListener("mousedown", this.mdownEventHandler);
        document.removeEventListener("mousedown", this.removeSelection);
    }

    active() {
        this.bindEvents();
    }
    
    inactive() {
        this.unbindEvents();
        this.removeSelection();
        this.toolIsActive = false;
    }
}

export default SelectCanvasArea;