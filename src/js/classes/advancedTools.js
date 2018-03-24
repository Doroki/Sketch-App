import MovableElements from "../classes/movableElements_class.js";

class AdvancedTool extends MovableElements {
    constructor(elementButton, canvasObject, canvasElement = null, elementToCreate) {
        super(elementButton, canvasObject, canvasElement, elementToCreate)

        this.toolIsActive = false;
        this.button; 
    }

    disableButton() {
        this.button.classList.remove("menu__button--active");
        this.button.dataset.usage = "false";
    }

    enableButton() {
        this.button.classList.add("menu__button--active"); // set button to active
        this.button.dataset.usage = "true";
        document.querySelector(":root").style.setProperty("--canvas-cursor", `url(${this.cursorUrl}), auto`)// change cursor
    } 
}

export default AdvancedTool;