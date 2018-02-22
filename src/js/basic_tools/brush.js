import Tool from "../classes/tool_class.js"; // Class of tools

const Brush = new Tool('#Brush', '../my-icons-collection/svg/001-color-picker.png');

Brush.use = function(e, canvas) {
    let paintColor = document.querySelector("[type=color]").value;
    canvas.changeProperties({color: paintColor, drawStyle: "line"});
    document.querySelector("#color-field").disabled = false;
}

export default Brush;