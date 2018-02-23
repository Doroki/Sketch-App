import Tool from "../classes/tool_class.js"; // Class of tools

const ColorPicker = new Tool('#Color-Picker', '../my-icons-collection/svg/001-color-picker.png');

ColorPicker.checkColor = function(e, canvas) {

		const colorData = canvas.ctx.getImageData(e.offsetX, e.offsetY, 1, 1);
		
		const rgbColor = {
			red : colorData.data[0],
			green : colorData.data[1],
			blue : colorData.data[2]
		}
		
		const hexColor = {
			red : rgbColor.red.toString(16),
			green : rgbColor.green.toString(16),
			blue : rgbColor.blue.toString(16)
		}
	
		console.log(hexColor);
	
		document.querySelector("#color-field").value = `#${hexColor.red}${hexColor.green}${hexColor.blue}`; 
};


ColorPicker.active = function(e, canvas) {
	
	ColorPicker.eventHandler // created to make possiable to remove Event Listener

	canvas.changeProperties({drawStyle: "none"});

	document.querySelector("#canvas").addEventListener("click", ColorPicker.eventHandler = function(event){
		ColorPicker.checkColor(event, canvas)
	});

	
}

ColorPicker.inactive = function(e, canvas) {
    document.querySelector("#canvas").removeEventListener("click", ColorPicker.eventHandler);
}

export default ColorPicker;