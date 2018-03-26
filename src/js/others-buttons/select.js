import AdvancedTools from "../classes/advancedTools.js";

class SelectCanvasArea extends AdvancedTools {
    constructor(buttonElement, canvas, canvasElement, elementToCreate) {
        super(buttonElement, canvas, canvasElement, elementToCreate);
        this.copyMemory;
        this.button = this.element.selectTool;
    }

    removeSelection() {
        this.deleteContentElement();
        this.disableCopyButtons(); 
    }

    //// ---------  COPY / PASTE / CUT BUTTONS ----------- /////
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

    getImage(width, height) {
        const canvas = document.createElement("canvas");
        canvas.width = width;
		canvas.height = height;
        const context = canvas.getContext("2d");
        context.putImageData(this.copyMemory, 0, 0);
        
        return canvas.toDataURL();
    }

    loadCopiedImg() {

        const image = this.getImage(this.copyMemory.width, this.copyMemory.height)
        this.createContentElement("img");
        this.elementToDraw.src = image; 
        this.elementToDraw.style.width = `${this.copyMemory.width}px`;
        this.elementToDraw.style.height = `${this.copyMemory.height}px`;    
        this.showContentElement();   
    }

    pasteCopiedArea() {
        let pasteEventHandler;

        this.inactive(); // remove select tool events for a while;
        this.loadCopiedImg();

        this.canvasElement.addEventListener("mousedown", pasteEventHandler = (e) => {
            e.preventDefault();
            const positionToDraw = this.checkPositionOfElement();
            this.deleteContentElement();
            this.canvas.ctx.drawImage(this.elementToDraw, positionToDraw.x, positionToDraw.y, positionToDraw.width, positionToDraw.height);
            this.canvas.saveToHistory();
            this.active(); // add select tool events;
            this.canvasElement.removeEventListener(e.type, pasteEventHandler);
        });
        // this.canvas.saveToHistory();
    }

    //// ---------  EVENTS ----------- /////



    bindEvents() {
        this.canvasElement.addEventListener("mousedown", this.mdownEventHandler = e => {

            if (this.toolIsActive) {
                this.removeSelection();
                this.toolIsActive = false;
            } else {
                this.createContentElement();
                this.showContentElement(e);
                this.enableCopyButtons();
                this.initResizeEvent(e, this.elementToDraw.parentElement);
                this.toolIsActive = true;
            }
        });
    }

    unbindEvents() {
        this.canvasElement.removeEventListener("mousedown", this.mdownEventHandler);
        document.removeEventListener("mousedown", this.removeSelection);
    }

    active() {
        this.bindEvents();
    }
    
    inactive() {
        this.unbindEvents();
        this.removeSelection();
        this.toolIsActive = false;
    }
}

export default SelectCanvasArea;