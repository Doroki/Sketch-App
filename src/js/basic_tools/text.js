import AdvancedTools from "../classes/advancedTools.js";

class TextDrawTool extends AdvancedTools {
    constructor(elementButton, canvasObject, canvasElement, elementToCreate) {
        super(elementButton, canvasObject, canvasElement, elementToCreate)
        this.button = this.element;

        this.textPropety = {
            fontFamily: "sans-serif",
            textColor: "#CCCCCC",
            fontSize: "30px",
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
        console.log(this.pleaceToDraw.x +""+ this.pleaceToDraw.y)
        this.canvas.ctx.font=`
            ${this.textPropety.fontStyle}
            ${this.textPropety.fontWeight}
            ${this.textPropety.fontSize}
            ${this.textPropety.fontFamily}`;

        this.canvas.ctx.fillStyle = this.textPropety.textColor;
        // this.canvas.ctx.textAlign = "center";
        this.canvas.ctx.fillText(this.elementToDraw.value, this.pleaceToDraw.x, this.pleaceToDraw.y);
    }

    initTexting() {
        this.canvasElement.addEventListener("mousedown", (e) => {
            if(this.isFieldOn) {
                this.createContentElement();
                this.showContentElement(e);
            }
            else {
                
            }
            this.canvasElement.addEventListener("click", function() {
                this.drawText();
                this.deleteContentElement();
            }.bind(this));
        });
        // this.canvasElement.addEventListener("click", (e) => {
        //     if(!this.isFieldOn) {
        //         // this.useTextStyle();
        //         return;
        //     }

        //     this.drawText();
        // });
    }

    activeSelection() {

        this.canvasElement.addEventListener("mousedown", this.clickEventHandler = e => {

            this.createContentElement();
            this.showContentElement(e);
            // this.enableCopyButtons();
            this.initResizeEvent(e, this.elementToDraw.parentElement);

            this.canvasElement.removeEventListener("mousedown", this.clickEventHandler);
            document.addEventListener("click", this.deactiveSelection.bind(this));
        });
    }

    deactiveSelection() {
        this.deleteContentElement();
        this.disableCopyButtons();

        this.canvasElement.addEventListener("mousedown", this.clickEventHandler);
    }
}

export default TextDrawTool;