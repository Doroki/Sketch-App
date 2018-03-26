///// IMPORT FILES /////
import Canvas from "./classes/canvas_class"; // Class of Canvas element

import BrushTool from "./basic_tools/brush";
import EaserTool from "./basic_tools/easer";
import SprayTool from "./basic_tools/spray";  
import ColorPickerTool from "./basic_tools/color_picker"; 
import TextDrawTool from "./basic_tools/text"; 

import OpenFile from "./others-buttons/open_file";
import DownloadCanvas from "./others-buttons/download";
import CanvasStorage from "./others-buttons/storage";

import SelectCanvasArea from "./others-buttons/select";
import Undo_Redo from "./others-buttons/undo_redo_class"


/////----------------	ELEMENT HANDLERS ----------------------	/////

// -- menu -- //
const menu = document.querySelector(".menu");

// -- canvas element -- //
const canvasElement = document.querySelector("#canvas");
const workSpaceWidth = window.innerWidth;
const workSpaceHeight = window.innerHeight - menu.offsetHeight;

// -- tool buttons -- //
const brushButton = menu.querySelector("#Brush");
const easerButton = menu.querySelector("#Easer");
const colorPickerButton = menu.querySelector("#Color-Picker");
const sprayButton = menu.querySelector("#Spray");
const textButton = menu.querySelector("#Text");

// -- input properties -- //
const toolColor = menu.querySelector("#color-field");
const toolSize = menu.querySelector("#tool-size");

const fontSize = menu.querySelector("#font-size");
const fontColor = menu.querySelector("#color-font");
const fontBold = menu.querySelector("#bold");
const fontItalic = menu.querySelector("#italic");

// -- others buttons -- //
const save = menu.querySelector("#save");
const download = menu.querySelector("#download");
const openFile = menu.querySelector("#get-file");

const redoButton = menu.querySelector("#redo");
const undoButton = menu.querySelector("#undo");

const selectTool = menu.querySelector("#Select");
const cutTool = menu.querySelector("#cut");
const copyTool = menu.querySelector("#copy");
const pasteTool = menu.querySelector("#paste");

const copyToolSet = {
	selectTool,
	cutTool,
	copyTool,
	pasteTool
}

/////----------------	OBJECTS ----------------------	/////

const Sketch = new Canvas(canvasElement, workSpaceWidth, workSpaceHeight);

const Brush = new BrushTool(brushButton, Sketch, '../my-icons-collection/svg/001-color-picker.png');
const Easer = new EaserTool(easerButton, Sketch, '../my-icons-collection/svg/001-color-picker.png');
const ColorPicker = new ColorPickerTool(colorPickerButton, Sketch, '../my-icons-collection/svg/001-color-picker.png', canvasElement);
const Spray = new SprayTool(sprayButton, Sketch, '../my-icons-collection/svg/001-color-picker.png');
const TextTool = new TextDrawTool(textButton, Sketch, canvasElement, "textarea");
// const Rect;

const SketchStorage = new CanvasStorage(save, Sketch, canvasElement);
const DownloadImage = new DownloadCanvas(download, canvasElement);
const LoadFile = new OpenFile(openFile, Sketch, canvasElement, "img");

const DrawHistory = new Undo_Redo(Sketch);
const SelectArea = new SelectCanvasArea(copyToolSet, Sketch, canvasElement, "div");


/////----------------	TOOLSET FOR EVENT LISTENER (ENABLE / DISABLE BUTTON)   --------------------/////

const toolSet = {
	"Brush": Brush,
	"Easer": Easer,
	"Color-Picker": ColorPicker,
	"Spray": Spray,
	"Text": TextTool,
	// "Rect": Rect
	"Select": SelectArea
}

/////----------------	EVENT LISTENERS  ----------------------	/////

window.addEventListener('load', () => SketchStorage.checkStorage());

toolSize.addEventListener("change", Sketch.changeProperties({width: toolSize.value}));
toolColor.addEventListener("change", Sketch.changeProperties({color: toolColor.value}));

fontSize.addEventListener("change", () => {
	TextTool.setTextStyle({fontSize: `${fontSize.value}px`})
	if(TextTool.elementToDraw.localName === "textarea") TextTool.textareaStyle();
});
fontColor.addEventListener("change", () => {
	TextTool.setTextStyle({textColor: fontColor.value})
	if(TextTool.elementToDraw.localName === "textarea") TextTool.textareaStyle();
});
fontBold.addEventListener("click", () => {
	if(fontBold.dataset.active === "false") {
		TextTool.setTextStyle({fontWeight: `bold`});
		fontBold.classList.add("menu__button--active");
		fontBold.dataset.active = "true";
		if(TextTool.elementToDraw.localName === "textarea") TextTool.textareaStyle();
	} else {
		TextTool.setTextStyle({fontWeight: `normal`});
		fontBold.classList.remove("menu__button--active");
		fontBold.dataset.active = "false";
		if(TextTool.elementToDraw.localName === "textarea") TextTool.textareaStyle();
	}
});
fontItalic.addEventListener("click", () => {
	if(fontItalic.dataset.active === "false") {
		TextTool.setTextStyle({fontStyle: `italic`});
		fontItalic.classList.add("menu__button--active");
		fontItalic.dataset.active = "true";
		if(TextTool.elementToDraw.localName === "textarea") TextTool.textareaStyle();
	} else {
		TextTool.setTextStyle({fontStyle: `normal`});
		fontItalic.classList.remove("menu__button--active");
		fontItalic.dataset.active = "false";
		if(TextTool.elementToDraw.localName === "textarea") TextTool.textareaStyle();
	}
});

save.addEventListener("click", () => SketchStorage.save());
download.addEventListener("click", () => DownloadImage.downloadCanvas());
openFile.addEventListener("change", function() {LoadFile.loadFile()});
redoButton.addEventListener("click", () => DrawHistory.redo());
undoButton.addEventListener("click", () => DrawHistory.undo());

// -- "Copy / Paste" functionality -- //
cutTool.addEventListener("click", () => SelectArea.cutSelectedArea());
copyTool.addEventListener("click", () => SelectArea.copySelectedArea());
pasteTool.addEventListener("click", () => SelectArea.pasteCopiedArea());


function disableButton(e) {
	let buttonID = document.querySelector("[data-usage=true]").id;
	let toolToDisable = toolSet[buttonID];
	
	toolToDisable.disableButton();
	toolToDisable.inactive();
}

function enableButton(e) {
	let buttonID = e.target.id;
	let toolToActive = toolSet[buttonID];

	toolToActive.enableButton();
	toolToActive.active();
}

function useButton(e) {
	disableButton(e);
	enableButton(e);
}

menu.addEventListener("click", e => {
	if(e.target.hasAttribute("data-usage")){
		useButton(e);	
	}
});