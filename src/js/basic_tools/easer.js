import Tool from "../classes/tool_class.js"; // Class of tools

const Easer = new Tool('#Easer', '../my-icons-collection/svg/001-color-picker.png');

Easer.use = function(e, canvas) {
    canvas.changeProperties({drawStyle: "line", color: "#ffffff"});
    document.querySelector("#color-field").disabled = true;
}

export default Easer;