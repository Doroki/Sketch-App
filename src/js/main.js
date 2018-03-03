import Canvas from "./classes/canvas_class.js"; // Class of Canvas element

import Undo_Redo from "./others-buttons/undo_redo_class.js"

import Brush from "./basic_tools/brush.js";
import Easer from "./basic_tools/easer.js";
import Spray from "./basic_tools/spray.js";  
import ColorPicker from "./basic_tools/color_picker.js"; 
import Rect from "./basic_tools/rect.js"; 

import OpenFile from "./others-buttons/open_file.js"
import DownloadCanvas from "./others-buttons/download.js"


//////////

const menu = document.querySelector(".menu");
const canvasElement = document.querySelector("#canvas");
const workSpaceWidth = window.innerWidth;
const workSpaceHeight = window.innerHeight - menu.offsetHeight;
const toolColor = document.querySelector("#color-field");
const toolSize = document.querySelector("#tool-size");
const download = document.querySelector("#download");

const redo = document.querySelector("#redo");
const undo = document.querySelector("#undo");

const toolSet = {
	"Brush": Brush,
	"Easer": Easer,
	"Color-Picker": ColorPicker,
	"Spray": Spray,
	"Rect": Rect
}

// ///////////////

const Sketch = new Canvas("#canvas", workSpaceWidth, workSpaceHeight);
const Download = new DownloadCanvas(download, Sketch);
const Loader = new OpenFile("#get-file", Sketch);
const History = new Undo_Redo("#redo", Sketch);

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

// /////////////////////////////////////////////////

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
	Loader.loadFile()
});

download.addEventListener('click', () => Download.downloadCanvas);
redo.addEventListener("click", () => History.redo());
undo.addEventListener("click", () => History.undo());