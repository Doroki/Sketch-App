

class Text  {
    constructor(elementID, canvas) {
        this.element = elementID;
        this.canvas = canvas;
        this.lastX;
        this.lastY;
        this.initEvents();
    }

    createTextField(e) {
        const cursorPosition = this.checkPosition(e);
        this.lastX = cursorPosition.x;
        this.lastY = cursorPosition.y;

        const textField = document.createElement("textarea");
        textField.setAttribute(`style`,
        `position: absolute;
        top: ${this.lastY};
        left: ${this.lastX};
        border: 2px dashed #CCCCCC;
        outline: none;
        background-color: transparent;`);
        document.querySelector("body").appendChild(textField);
    }

    checkPosition(e) {
        return {
            x: e.offsetX,
            y: e.offsetY
        }
    }

    dragElement() {

    }

    dropElement() {

    }

    initTextField() {

    }

    disabledTextFiled() {

    }

    initEvents() {
        this.element.addEventListener("click", (e) => {
            this.createTextField(e);
        })
    }
}

export default Text;