import movableElements from "../classes/movableElements_class.js";

class advancedTool extends movableElements {
    constructor(elementButton, canvasObject, canvasElement = null) {
        super(elementButton, canvasObject, canvasElement)
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

export default advancedTool;