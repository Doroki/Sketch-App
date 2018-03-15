
class Tool {
    constructor(elementButton, canvasObject, cursorUrl, canvasElement = null) {
        this.element = elementButton;
        this.canvas = canvasObject;
        this.cursorUrl = cursorUrl;
        this.canvasElement = canvasElement;
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

export default Tool;