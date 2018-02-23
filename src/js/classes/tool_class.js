
class Tool {
    constructor(idElement, cursorUrl) {
        this.element = document.querySelector(idElement)
        this.cursorUrl = cursorUrl
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