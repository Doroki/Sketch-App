import Canvas from "./classes/canvas_class.js"; // Class of Canvas element

import Brush from "./basic_tools/brush.js";
import Easer from "./basic_tools/easer.js";
import Spray from "./basic_tools/spray.js";  
import ColorPicker from "./basic_tools/color_picker.js"; 
import Rect from "./basic_tools/rect.js"; 


//////////

const menu = document.querySelector(".menu");
const canvasElement = document.querySelector("#canvas");
const workSpaceWidth = window.innerWidth;
const workSpaceHeight = window.innerHeight - menu.offsetHeight;
const toolColor = document.querySelector("#color-field");
const toolSize = document.querySelector("#tool-size")

const toolSet = {
	"Brush": Brush,
	"Easer": Easer,
	"Color-Picker": ColorPicker,
	"Spray": Spray,
	"Rect": Rect
}

///////////////

const Sketch = new Canvas("#canvas", workSpaceWidth, workSpaceHeight);

function disableButton(e, canvas) {
	let buttonID = document.querySelector("[data-usage=true]").id;
	let toolToDisable = toolSet[buttonID];

	toolToDisable.disableButton();
	toolToDisable.inactive(e, canvas);
}

function enableButton(e, canvas) {
	let buttonID = e.target.id;
	let toolToActive = toolSet[buttonID];

	toolToActive.enableButton();
	toolToActive.active(e, canvas);
}

function useButton(e) {
	disableButton(e, Sketch);
	enableButton(e, Sketch);
}

menu.addEventListener("click", e => {
	if(e.target.hasAttribute("data-usage")){
		useButton(e);	
	}
});

/////////////////////////////////////////////////

function changeColor() {
	Sketch.changeProperties({color: toolColor.value}); 
}

function changeToolSize() {
	Sketch.changeProperties({width: toolSize.value}); 
}

function changeFontSize() {
	
}

/////////

toolSize.addEventListener("change", changeToolSize);
toolColor.addEventListener("change", changeColor);


function downloadCanvas(anchor, canvasElement) {
	const fileName = "my_image.png"
	const link = canvasElement.toDataURL();

	anchor.download = fileName;
    anchor.href = link;
}

document.getElementById("get-file").addEventListener("change", function() {
	// const reader = new FileReader();
	// reader.onload =  function(event) {
	// 	console.log(event)
	// }
	
	var file = document.querySelector('input[type=file]').files[0];
	var reader = new FileReader();

reader.addEventListener("load", function () {
	    console.log(reader.result)
	  }, false);

reader.readAsDataURL(file);
console.log(reader)

    // downloadCanvas(this, 'canvas');
});