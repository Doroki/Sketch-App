import MovableElements from "../classes/movableElements_class.js";

class SelectCanvasArea extends MovableElements {
    constructor(buttonElement, canvas, canvasElement, elementToCreate) {
        super(buttonElement, canvas, canvasElement, elementToCreate);
        this.copyMemory;
    }

    createSelectArea() {
        let loadEventHandler;
        
        this.elementToDraw.onload = function() {
            const imageSize = this.checkSizeImage(this.elementToDraw);
            this.elementToDraw.style.width = `${imageSize.x}px`;
            this.elementToDraw.style.height = `${imageSize.y}px`;

            this.showContentElement();
        }.bind(this)
    }

    enablePasteButton() {
        this.element.pasteTool.removeAttribute("disabled");
        this.element.pasteTool.classList.remove("menu__button--disabled");
    }

    enableCopyButtons() {
        this.element.copyTool.removeAttribute("disabled");
        this.element.cutTool.removeAttribute("disabled");
        this.element.copyTool.classList.remove("menu__button--disabled");
        this.element.cutTool.classList.remove("menu__button--disabled");
    }

    disableCopyButtons() {
        this.element.copyTool.setAttribute("disabled", "disabled");
        this.element.cutTool.setAttribute("disabled", "disabled");
        this.element.copyTool.classList.add("menu__button--disabled");
        this.element.cutTool.classList.add("menu__button--disabled");
    }

    copySelectedArea() {
        const areaPositionToCopy = this.checkPositionOfElement();
        this.copyMemory = this.canvas.ctx.getImageData(areaPositionToCopy.x, areaPositionToCopy.y, areaPositionToCopy.width, areaPositionToCopy.height);
        this.enablePasteButton();

        return areaPositionToCopy;
    }

    cutSelectedArea() {
        const cordsToClear = this.copySelectedArea();
        this.canvas.ctx.clearRect(cordsToClear.x, cordsToClear.y, cordsToClear.width, cordsToClear.height);
    }

    pasteCopiedArea() {
        this.canvas.ctx.putImageData(this.copyMemory, 0, 0);
        this.deactiveSelection()
        this.canvas.saveToHistory();
    }


    activeSelection() {
        this.createContentElement();
        this.canvasElement.addEventListener("click", this.clickEventHandler = (e) => {
            this.showContentElement(e);
            this.enableCopyButtons();
            this.canvasElement.addEventListener("click", this.deactiveSelection.bind(this));
        });
    }

    deactiveSelection() {
        this.deleteContentElement();
        this.disableCopyButtons();
        this.canvasElement.removeEventListener("click", this.clickEventHandler.bind(this));
    }

}

export default SelectCanvasArea;