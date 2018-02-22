import Canvas from "./classes/canvas_class.js"; // Class of Canvas element

import Brush from "./basic_tools/brush.js";
import Easer from "./basic_tools/easer.js";
import Spray from "./basic_tools/spray.js";  
import ColorPicker from "./basic_tools/color_picker.js"; 

const menu = document.querySelector(".menu");
const canvas = document.querySelector("#canvas");
const workSpaceWidth = window.innerWidth;
const workSpaceHeight = window.innerHeight - menu.offsetHeight;
const toolColor = document.querySelector("#color-field");
const toolSize = document.querySelector("#tool-size")


const toolSet = {
	"Brush": Brush,
	"Easer": Easer,
	"Color-Picker": ColorPicker,
	"Spray": Spray
}

const Sketch = new Canvas("#canvas", workSpaceWidth, workSpaceHeight);

function inactiveButton(nodeList) {
	Array.prototype.forEach.call(nodeList, function(element) {
		element.dataset.usage = "false";
		element.classList.remove("menu__button--active");
		canvas.removeEventListener("click", toolSet[element.id].use);
	});
}

function changeColor() {
	Sketch.changeProperties({color: toolColor.value}); 
}

function changeToolSize() {
	Sketch.changeProperties({width: toolSize.value}); 
}

function changeFontSize() {
	
}

menu.addEventListener("click", (e) => {

	const elementToUse = e.target;
	let elementUsage = elementToUse.dataset.usage;

	if(elementUsage === "true") return;
	
	inactiveButton(document.querySelectorAll("[data-usage=true]"));

	elementToUse.dataset.usage = "true";
	toolSet[elementToUse.id].use(e, Sketch);
});

toolSize.addEventListener("change", changeToolSize);
toolColor.addEventListener("change", changeColor);
