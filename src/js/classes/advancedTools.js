import MovableElements from "../classes/movableElements_class.js";

class AdvancedTool extends movableElements {
    constructor(elementButton, canvasObject, canvasElement = null, elementToCreate) {
        super(elementButton, canvasObject, canvasElement, elementToCreate)
    }

    disableButton() {
        this.element.classList.remove("menu__button--active");
        this.element.dataset.usage = "false";
    }

    enableButton() {
        this.element.classList.add("menu__button--active"); // set button to active
        this.element.dataset.usage = "true";
        document.querySelector(":root").style.setProperty("--canvas-cursor", `url(${this.cursorUrl}), auto`)// change cursor
    } 
}

export default AdvancedTool;