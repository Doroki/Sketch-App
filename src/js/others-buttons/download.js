import OtherTools from "../classes/otherTools.js";

class DownloadCanvas extends OtherTools {
    constructor(element, canvasElement) {
        super(element, canvasElement);
        this.fileName = "my_image.png";
    }  

    downloadCanvas() {
        const link = this.canvas.toDataURL();
  
        this.element.download = this.fileName;
        this.element.href = link;
    }
}

export default DownloadCanvas;