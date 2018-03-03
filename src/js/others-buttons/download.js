

class DownloadCanvas {
    constructor(element, canvasElement) {
        this.fileName = "my_image.png";
        this.canvas = canvasElement;
        this.element = element;
    }  

    downloadCanvas() {
        const link = canvas.toDataURL();

        this.element.download = fileName;
        this.element.href = link;
    }
}

export default DownloadCanvas;