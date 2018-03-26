
class MovableElements {
    constructor(buttonElement, canvas, canvasElement, elementToCreate) {
        this.element = buttonElement;
        this.canvas = canvas;
        this.canvasElement = canvasElement;
        this.elementToCreate = elementToCreate;
        this.menuHeight = document.querySelector(".menu").offsetHeight;

        this.isFieldOn = false;

        this.pleaceToDraw = {
            x: 0,
            y: 0
        }

        this.lastCursorX = 0;
        this.lastCursorY = 0;


    }


    showContentElement(event) {
        const e = event || {clientX: 0, clientY: this.menuHeight};
        const wrapper = this.elementToDraw.parentElement;
        
        this.lastCursorX = e.clientX - 10;
        this.lastCursorY = e.clientY - 10;

        wrapper.style.top = `${this.lastCursorY}px`;
        wrapper.style.left = `${this.lastCursorX}px`;

        document.querySelector("body").appendChild(wrapper);
        // this.initResizeEvent(event, wrapper);
    }

    createContentElement(tag) {

        const wrapper = document.createElement("div");
        this.elementToDraw = document.createElement(tag || `${this.elementToCreate}`);
        const resizeHandler = document.createElement("span");

        this.elementToDraw.id = "selection";
        this.elementToDraw.classList.add("main-element");
        wrapper.classList.add("wrapper");
        resizeHandler.classList.add("resizer");


        wrapper.appendChild(this.elementToDraw);
        wrapper.appendChild(resizeHandler);

        this.dragElement(wrapper);
        this.resizeEvent(wrapper, resizeHandler);
    }

    deleteContentElement() {
        const wrapper = this.elementToDraw.parentElement;

        wrapper.remove();
    }

    checkPositionOfElement() {
        const wrapper = this.elementToDraw.parentElement;
        this.pleaceToDraw.x = wrapper.offsetLeft + 14; // "14" width of margin + border + padding
        this.pleaceToDraw.y = wrapper.offsetTop + 14 - this.menuHeight;

        return {
            x: wrapper.offsetLeft + 12,
            y: wrapper.offsetTop + 12 - this.menuHeight,
            width: this.elementToDraw.offsetWidth,
            height: this.elementToDraw.offsetHeight
        }
    }

    ///////// ---------------------  RESIZE ELEMENT ----------------------- //////////
    resizeEvent(wrapper, resizeHandler) {

        resizeHandler.addEventListener("mousedown", (e) => {
            e.preventDefault();
            this.initResizeEvent(e, wrapper)
         });

    }

    initResizeEvent(e, container) {

        const elementPositionY = container.offsetTop;
        const elementPositionX = container.offsetLeft;

        let mouseUpHandler;
        let mouseMoveHandler;


        document.addEventListener("mouseup", mouseUpHandler = () => this.stopResizeElement(mouseUpHandler, mouseMoveHandler));
        document.addEventListener("mousemove", mouseMoveHandler = (e) => this.resizeElement(e, elementPositionX, elementPositionY, container));
    }

    resizeElement(e, x, y, container) {

        let cursorPositionY = e.clientY - y  - 25;
        let cursorPositionX = e.clientX - x  - 25;

        this.elementToDraw.style.width = cursorPositionX + "px";
        this.elementToDraw.style.height = cursorPositionY + "px";
    }

    stopResizeElement(mouseUpHandler, mouseMoveHandler) {

        document.removeEventListener("mouseup", mouseUpHandler);
        document.removeEventListener("mousemove", mouseMoveHandler);

        this.checkPositionOfElement();
    }

    ///////// ---------------------  DRAG & DROP ELEMENT ----------------------- //////////
    dragElement(wrapper) {

        let cursorPositionX;
        let cursorPositionY;

        this.elementToDraw.addEventListener("mousedown", (e) => {
            if(this.elementToDraw.localName !== "textarea") e.preventDefault();
            this.initDragEvent(e, cursorPositionX, cursorPositionY, wrapper)
        })
    }

    initDragEvent(e, cursorPositionX, cursorPositionY, element) {
        let mouseUpHandler;
        let mouseMoveHandler;

        this.lastCursorX = e.clientX;
        this.lastCursorY = e.clientY;

        this.newPositionX = element.offsetLeft;
        this.newPositionY = element.offsetTop;
        
        document.addEventListener("mouseup", mouseUpHandler = () => this.dropElement(mouseUpHandler, mouseMoveHandler));
        document.addEventListener("mousemove", mouseMoveHandler = (e) => this.moveElement(e, cursorPositionX, cursorPositionY, element));
    }

    moveElement(e, x, y, element) {

        const cursorPositionX = this.lastCursorX - e.clientX;
        const cursorPositionY = this.lastCursorY - e.clientY;
        this.lastCursorX  = e.clientX;
        this.lastCursorY = e.clientY;


        this.newPositionX = (this.newPositionX - cursorPositionX)
        this.newPositionY = (this.newPositionY - cursorPositionY)

        element.style.top = this.newPositionY + "px";
        element.style.left = this.newPositionX + "px";


    }

    dropElement(mouseUpHandler, mouseMoveHandler) {

        document.removeEventListener("mouseup", mouseUpHandler);
        document.removeEventListener("mousemove", mouseMoveHandler);

        this.checkPositionOfElement();
    }
}

export default MovableElements;