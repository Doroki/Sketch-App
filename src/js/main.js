import Canvas from "./canvas_class.js"; // Class of Canvas element
import Tool from "./tools_module.js"; // Class of Canvas element

const menu = document.querySelector(".menu");
const canvasElement = document.querySelector("#canvas");
const workSpaceWidth = window.innerWidth;
const workSpaceHeight = window.innerHeight - menu.offsetHeight;

const Sketch = new Canvas("#canvas", workSpaceWidth, workSpaceHeight);



const ColorPicker = new Tool('#Color-Picker', '../my-icons-collection/svg/001-color-picker.png');
ColorPicker.checkColor = function(e) {
	
	// // const readColor = Sketch.ctx.getImageData(e.offsetX, e.offsetY, 1, 1);
	// // console.log(readColor);	
	// var imgData = Sketch.ctx.getImageData(e.offsetX, e.offsetY, 1, 1),
    // red = imgData.data[0],
    // green = imgData.data[1],
    // blue = imgData.data[2],
    // alpha = imgData.data[3];
    // console.log(red + " " + green + " " + blue + " " + alpha); 
};

canvasElement.addEventListener("click", ColorPicker.checkColor);