

class CanvasStorage {
    constructor(element, canvasElement, canvas) {
        this.canvasElement = canvasElement;
        this.canvas = canvas;
        this.element = element;
    } 

    save() {
        const link = this.canvasElement.toDataURL();
  
        localStorage.setItem("img", link)
    } 

    load() {
        const link = localStorage.getItem("img");

        const imageObj = new Image();
        imageObj.src = link;
        imageObj.onload = function() {
            this.canvas.ctx.drawImage(imageObj, 0, 0);
        }.bind(this);
    } 
}

export default CanvasStorage;