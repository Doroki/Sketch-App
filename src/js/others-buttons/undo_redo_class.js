import OtherTools from "../classes/otherTools_class.js";

class Undo_Redo extends OtherTools  {
    constructor(elementID, canvasElement) {
        super(elementID, canvasElement);
        this.undoHistory = [];
    }

    loadState(url) {
        const canvasHeight = this.canvas.canvasArea.clientHeight;
        const canvasWidth = this.canvas.canvasArea.clientWidth;
        
        const imageObj = new Image();
        imageObj.src = url;
        imageObj.onload = function() {
            this.canvas.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            this.canvas.ctx.drawImage(imageObj, 0, 0);
        }.bind(this);
    }

    redo() {
        if(this.undoHistory.length <= 0) return;

        const stateToLoad = this.undoHistory[this.undoHistory.length - 1]
        this.undoHistory.pop();
        this.canvas.drawHistory.push(stateToLoad);

        this.loadState(stateToLoad);
    }

    undo() {
        const history = this.canvas.drawHistory;
        const historyLength = history.length;

        if(historyLength <= 1) return;

        const stateToUndo = history[historyLength - 1];
        const stateToLoad = history[historyLength - 2];

        this.undoHistory.push(stateToUndo)
        this.canvas.drawHistory.pop();

        this.loadState(stateToLoad);
    }
}

export default Undo_Redo; 