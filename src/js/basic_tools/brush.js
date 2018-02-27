import Tool from "../classes/tool_class.js"; // Class of tools

const Brush = new Tool('#Brush', '../my-icons-collection/svg/001-color-picker.png');


Brush.active = function(e, canvas) {

    let paintColor = document.querySelector("[type=color]").value;
    canvas.changeProperties({color: paintColor, drawStyle: "line"});
    canvas.bindEvents();
}

Brush.inactive = function(e, canvas) {
    canvas.unbindEvents();
}

export default Brush;