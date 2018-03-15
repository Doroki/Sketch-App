

class TextTool {
    constructor(buttonElement, canvas, canvasElement) {
        this.element = buttonElement;
        this.canvas = canvas;
        this.canvasElement = canvasElement;

        this.lastCursorX = 0;
        this.lastCursorY = 0;
        this.initEvents();
    }

    createTextField(e) {

        this.lastCursorX = e.clientX;
        this.lastCursorY = e.clientY;

        const textField = document.createElement("textarea");
        textField.setAttribute(`style`,
        `position: absolute;
        top: ${this.lastCursorY}px;
        left: ${this.lastCursorX}px;
        border: 2px dashed #CCCCCC;
        outline: none;
        background-color: transparent;
        z-index: 5000;`);
        document.querySelector("body").appendChild(textField);

        this.dragElement(textField)
    }

    dragElement(element) {

        let cursorPositionX;
        let cursorPositionY;
        document.addEventListener("resize", () => console.log("działa"));
        // element.addEventListener("mousedown", (e) => {
        //    this.initDragEvent(e, cursorPositionX, cursorPositionY, element)
        // })
    }

    initDragEvent(e, cursorPositionX, cursorPositionY, element) {
        let mouseUpHandler;
        let mouseMoveHandler;

        this.lastCursorX = e.clientX;
        this.lastCursorY = e.clientY;

        document.addEventListener("mouseup", mouseUpHandler = () => this.dropElement(mouseUpHandler, mouseMoveHandler));
        document.addEventListener("mousemove", mouseMoveHandler = (e) => this.moveElement(e, cursorPositionX, cursorPositionY, element));
    }

    moveElement(e, cursorPositionX, cursorPositionY, element) {

        cursorPositionX = this.lastCursorX  - e.clientX;
        cursorPositionY = this.lastCursorY - e.clientY;
        this.lastCursorX  = e.clientX;
        this.lastCursorY = e.clientY;

        element.style.top = (element.offsetTop - cursorPositionY) + "px";
        element.style.left = (element.offsetLeft - cursorPositionX) + "px";
    }

    dropElement(mouseUpHandler, mouseMoveHandler) {

        document.removeEventListener("mouseup", mouseUpHandler);
        document.removeEventListener("mousemove", mouseMoveHandler);
      }

    initEvents() {

        this.canvasElement.addEventListener("click", (e) => {

            const textField = this.createTextField(e);

        });
    }
}

export default TextTool;