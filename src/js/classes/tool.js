
class Tool {
    constructor(elementButton, canvasObject, canvasElement = null) {
        this.element = elementButton;
        this.canvas = canvasObject;
        this.canvasElement = canvasElement;
    }

    disableButton() {
        this.element.classList.remove("menu__button--active");
        this.element.dataset.usage = "false";
    }

    enableButton() {
        this.element.classList.add("menu__button--active"); // set button to active
        this.element.dataset.usage = "true";
    } 
}

export default Tool;