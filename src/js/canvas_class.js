class Canvas {
  
	constructor(canvasElement, width, height){ // creating canvas object, needed arguments (1. selector of canvas element, 2. width, 3. height)
		this.canvasArea = document.querySelector(canvasElement);
		this.canvasArea.width = width;
		this.canvasArea.height = height;
		this.ctx = this.canvasArea.getContext('2d');
		this.isDrawing = false;
		this.lastX = 0;
		this.lastY = 0;
		this.drawProperties = {
			color :'#000000', 
			width :'10', 
			style :'round'
		};
		this._initEvents();
	}

	changeProperties(properties) { // Function to change drawing properies (), OBJECT AS ARGUMENT OF FUNCTION
		this.drawProperties = {
			...this.drawProperties,
			...properties
		};
	}
  
	_draw(e) {
	  if(!this.isDrawing) return;
  
		this.ctx.strokeStyle = this.drawProperties.color;
		this.ctx.lineJoin = 'round';
		this.ctx.lineCap = this.drawProperties.style;
		this.ctx.lineWidth = this.drawProperties.width;
  
		this.ctx.beginPath();
		this.ctx.moveTo(this.lastX, this.lastY);
		this.ctx.lineTo(e.offsetX, e.offsetY);
		this.ctx.stroke();
		this.lastX = e.offsetX;
		this.lastY = e.offsetY;
	}
  
	_initEvents() {
	   this.canvasArea.addEventListener("mousemove", (e) => {this._draw(e)});
	   this.canvasArea.addEventListener("mousedown", (e) => {
			this.isDrawing = true;
			this.lastX = e.offsetX;
			this.lastY = e.offsetY;
			this._draw(e);
	   });
	   this.canvasArea.addEventListener("mouseup", () => this.isDrawing = false);
	   this.canvasArea.addEventListener("mouseout", () => this.isDrawing = false);
	}
  }

  export default Canvas;