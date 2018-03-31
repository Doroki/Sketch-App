import Tool from "../classes/tool.js"; // Class of tools

class ColorPickerTool extends Tool {

	checkColor(e) {

		const colorData = this.canvas.ctx.getImageData(e.offsetX, e.offsetY, 1, 1);

		const rgbColor = {
			red: colorData.data[0],
			green: colorData.data[1],
			blue: colorData.data[2]
		}

		const hexColor = {
			red: rgbColor.red.toString(16),
			green: rgbColor.green.toString(16),
			blue: rgbColor.blue.toString(16)
		}

		document.querySelector("#color-field").value = `#${hexColor.red}${hexColor.green}${hexColor.blue}`;
	};


	active() {

		this.canvas.unbindEvents();

		this.eventHandler // created to make possiable to remove Event Listener

		this.canvasElement.addEventListener("click", this.eventHandler = (event) => {
			this.checkColor(event)
		});
	}

	inactive() {
		this.canvasElement.removeEventListener("click", this.eventHandler);
	}
}

export default ColorPickerTool;