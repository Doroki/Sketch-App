import Canvas from "./classes/canvas_class"; // Class of Canvas element

import Undo_Redo from "./others-buttons/undo_redo_class"

import Brush from "./basic_tools/brush";
import Easer from "./basic_tools/easer";
import Spray from "./basic_tools/spray";  
import ColorPicker from "./basic_tools/color_picker"; 
import Rect from "./basic_tools/rect"; 
import Text from "./basic_tools/text"; 

import OpenFile from "./others-buttons/open_file";
import DownloadCanvas from "./others-buttons/download";
import CanvasStorage from "./others-buttons/storage";


//////////

const menu = document.querySelector(".menu");
const canvasElement = document.querySelector("#canvas");
const workSpaceWidth = window.innerWidth;
const workSpaceHeight = window.innerHeight - menu.offsetHeight;
const toolColor = document.querySelector("#color-field");
const toolSize = document.querySelector("#tool-size");
const download = document.querySelector("#download");
const save = document.querySelector("#save");
const textTool = document.querySelector("#Text");

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
const DownloadImg = new DownloadCanvas(download, document.querySelector("#canvas"));
const StorageOfCanvas = new CanvasStorage(save, canvasElement, Sketch);
const Loader = new OpenFile("#get-file", Sketch);
const DrawHistory = new Undo_Redo("#redo", Sketch);
const TextTool = new Text(textTool, Sketch);

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

document.getElementById("get-file").addEventListener("change", function() {
	Loader.loadFile()
});

download.addEventListener('click', () => DownloadImg.downloadCanvas());
save.addEventListener('click', () => StorageOfCanvas.save());
redo.addEventListener("click", () => DrawHistory.redo());
undo.addEventListener("click", () => DrawHistory.undo());

window.addEventListener('load', () => StorageOfCanvas.checkStorage());