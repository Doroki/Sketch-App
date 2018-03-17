class movableElements {
    constructor(buttonElement, canvas, canvasElement) {
        this.element = buttonElement;
        this.canvas = canvas;
        this.canvasElement = canvasElement;

        this.lastCursorX = 0;
        this.lastCursorY = 0;
    }

    createTextField(e) {

        this.lastCursorX = e.clientX;
        this.lastCursorY = e.clientY;

        const wrapper = document.createElement("div");
        const textField = document.createElement("textarea");
        const resizeHandler = document.createElement("span");


        wrapper.setAttribute(`style`,
        `position: absolute;
        top: ${this.lastCursorY}px;
        left: ${this.lastCursorX}px;
        background-color: transparent;
        z-index: 500;`);
        

        textField.setAttribute(`style`,
        `border: 2px dashed #000;
        margin: 10px;
        background-color: transparent;
        z-index: 5000;
        resize: none;`);


        resizeHandler.setAttribute(`style`,
        `display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px dashed #000;
        background-color: #000;
        margin-right: -20px;
        margin-bottom: -20px;
        z-index: 5000;`);


        wrapper.appendChild(textField);
        wrapper.appendChild(resizeHandler);
        document.querySelector("body").appendChild(wrapper);

        this.dragElement(wrapper, textField);
        this.resizeEvent(wrapper, textField, resizeHandler);
    }

    ///////// ---------------------  RESIZE ELEMENT ----------------------- //////////
    resizeEvent(wrapper, textField, resizeHandler) {

        resizeHandler.addEventListener("mousedown", (e) => {
            this.initResizeEvent(e, wrapper, textField)
         });

    }

    initResizeEvent(e, container, field) {

        const elementPositionY = container.offsetTop;
        const elementPositionX = container.offsetLeft;

        let mouseUpHandler;
        let mouseMoveHandler;


        document.addEventListener("mouseup", mouseUpHandler = () => this.stopResizeElement(mouseUpHandler, mouseMoveHandler));
        document.addEventListener("mousemove", mouseMoveHandler = (e) => this.resizeElement(e, elementPositionX, elementPositionY, container, field));
    }

    resizeElement(e, x, y, container, field) {

        let cursorPositionY = e.clientY - y - 25;
        let cursorPositionX = e.clientX - x - 25;

        field.style.width = cursorPositionX + "px";
        field.style.height = cursorPositionY + "px";
    }

    stopResizeElement(mouseUpHandler, mouseMoveHandler) {

        document.removeEventListener("mouseup", mouseUpHandler);
        document.removeEventListener("mousemove", mouseMoveHandler);
    }

    ///////// ---------------------  DRAG & DROP ELEMENT ----------------------- //////////
    dragElement(wrapper, textField) {

        let cursorPositionX;
        let cursorPositionY;

        textField.addEventListener("mousedown", (e) => {
           this.initDragEvent(e, cursorPositionX, cursorPositionY, wrapper)
        })
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

    use() {
        this.canvasElement.addEventListener("click", (e) => {
            this.createTextField(e);
        });
    }
}

export default movableElements;