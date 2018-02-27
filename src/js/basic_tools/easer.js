import Tool from "../classes/tool_class.js"; // Class of tools

const Easer = new Tool('#Easer', '../my-icons-collection/svg/001-color-picker.png');

Easer.active = function(e, canvas) {

    canvas.changeProperties({drawStyle: "line", color: "#ffffff"});
    document.querySelector("#color-field").disabled = true;
    canvas.bindEvents();
}

Easer.inactive = function(e, canvas) {
    document.querySelector("#color-field").disabled = false;
    canvas.unbindEvents();
}

export default Easer;