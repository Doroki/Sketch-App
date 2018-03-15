import Tool from "../classes/tool_class.js"; // Class of tools

class EaserTool extends Tool {

    active() {

        this.canvas.changeProperties({drawStyle: "line", color: "#ffffff"});
        document.querySelector("#color-field").disabled = true;
        this.canvas.bindEvents();
    }
    
    inactive() {
        document.querySelector("#color-field").disabled = false;
        this.canvas.unbindEvents();
    }
}


export default EaserTool;