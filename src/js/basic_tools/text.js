import AdvancedTools from "../classes/advancedTools.js";

class TextDrawTool extends AdvancedTools {
    constructor(elementButton, canvasObject, canvasElement, elementToCreate) {
        super(elementButton, canvasObject, canvasElement, elementToCreate)
        this.button = this.element;

        this.textPropety = {
            fontFamily: "sans-serif",
            textColor: "#000000",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "normal"
        }
    }

    setTextStyle(properties) {
		this.textPropety = {
			...this.textPropety,
			...properties
		};
    }

    useTextStyle() {
        this.elementToDraw.style.fontFamily = this.textPropety.fontFamily;
        this.elementToDraw.style.color = this.textPropety.textColor;
        this.elementToDraw.style.fontSize = this.textPropety.fontSize;
        this.elementToDraw.style.fontStyle = this.textPropety.fontStyle;
        this.elementToDraw.style.fontWeight = this.textPropety.fontWeight;
    }


    drawText() {
        this.canvas.ctx.font=`
            ${this.textPropety.fontStyle}
            ${this.textPropety.fontWeight}
            ${this.textPropety.fontSize}
            ${this.textPropety.fontFamily}`;

        this.canvas.ctx.fillStyle = this.textPropety.textColor;
        this.canvas.ctx.fillText(this.elementToDraw.value, this.pleaceToDraw.x, this.pleaceToDraw.y);
        this.canvas.saveToHistory();
    }

    textareaStyle() {
        this.elementToDraw.style.fontStyle = `${this.textPropety.fontStyle}`;
        this.elementToDraw.style.fontWeight = `${this.textPropety.fontWeight}`;
        this.elementToDraw.style.fontSize = `${this.textPropety.fontSize}`;
        this.elementToDraw.style.fontFamily = `${this.textPropety.fontFamily}`;
        this.elementToDraw.style.color = `${this.textPropety.textColor}`;
    }


    bindEvents() {
        this.canvasElement.addEventListener("mousedown", this.mdownEventHandler = e => {

            if (this.toolIsActive) {
                this.drawText();
                this.deleteContentElement();
                this.toolIsActive = false;
            } else {
                this.createContentElement();
                this.showContentElement(e);
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
        if(this.toolIsActive) return;

        this.bindEvents();
    }
    
    inactive() {
        if(this.toolIsActive) return;
        this.unbindEvents();
        this.deleteContentElement();
        this.toolIsActive = false;
    }
}

export default TextDrawTool;