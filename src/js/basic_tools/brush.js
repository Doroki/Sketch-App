import Tool from "../classes/tool_class.js"; // Class of tools

class BrushTool extends Tool {

    active() {

        let paintColor = document.querySelector("[type=color]").value;
        this.canvas.changeProperties({color: paintColor, drawStyle: "line"});
        this.canvas.bindEvents();
    }
    
    inactive() {
        this.canvas.unbindEvents();
    }
}

export default BrushTool;