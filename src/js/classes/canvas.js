class Canvas {
  
	constructor(canvasElement, width, height){ // creating canvas object, needed arguments (1. selector of canvas element, 2. width, 3. height)
		this.canvasArea = canvasElement;
		this.canvasArea.width = width;
		this.canvasArea.height = height;
		this.ctx = this.canvasArea.getContext('2d');
		this.ctx.fillStyle = "#ffffff";
		this.ctx.fillRect(0, 0, width, height);

		this.isDrawing = false;
		this.lastX = 0;
		this.lastY = 0;

		//////// DRAW PROPERTIES /////////
		this.drawProperties = {
			drawStyle: "line",
			color :'#000000', 
			width :'10', 
			style :'round',
		};

		////// Event handler for unbind method /////
		this.mouseEventHandler = {
			move: null,
			down: null,
			up: null,
			out: null
		};

		//// properties to use for new methods of draw ///
		this.drawMethod = null

		//// Draw History ////
		this.drawHistory = [];
		this.saveToHistory(); // used during init of object to save blank canvas in history
	}

	changeProperties(properties) { // Function to change drawing properies: color, width, OBJECT AS ARGUMENT OF FUNCTION
		console.log(properties)
		this.drawProperties = {
			...this.drawProperties,
			...properties
		};
	}
  
	draw(e) {
		if(!this.isDrawing) return;
		  
		this.ctx.strokeStyle = this.drawProperties.color;
		this.ctx.fillStyle = this.drawProperties.color;
		this.ctx.lineJoin = 'round';
		this.ctx.lineCap = this.drawProperties.style;
		this.ctx.lineWidth = this.drawProperties.width;

		if(typeof this.drawMethod !== "function") { // Default settings of draw, useing for Brush or Easer
			this.ctx.beginPath();
			this.ctx.moveTo(this.lastX, this.lastY);
			this.ctx.lineTo(e.offsetX, e.offsetY);
			this.ctx.stroke();
		} else {
			this.drawMethod(e, this) // Other draw methods implemented from tools
		}
		
		this.lastX = e.offsetX;
		this.lastY = e.offsetY;
	}

	saveToHistory() {
		if(this.drawHistory.length > 6) {
		  const oldProperties = this.drawHistory.slice(1,7);
		  this.drawHistory = oldProperties;
		}
		
		this.drawHistory.push(this.canvasArea.toDataURL());   
	}

  
	bindEvents() {
	   this.canvasArea.addEventListener("mousemove", this.mouseEventHandler.move = (e) => {this.draw(e)});
	   this.canvasArea.addEventListener("mousedown", this.mouseEventHandler.down = (e) => {
				this.isDrawing = true;
				this.lastX = e.offsetX;
				this.lastY = e.offsetY;
				this.draw(e);
	   });
	   this.canvasArea.addEventListener("mouseup", this.mouseEventHandler.up = () => {
			if(this.isDrawing) {
				this.saveToHistory();
				this.isDrawing = false
			}
		});
	   this.canvasArea.addEventListener("mouseout", this.mouseEventHandler.out = () => {
			if(this.isDrawing) {
				this.saveToHistory();
				this.isDrawing = false
			}
		});
	}

	unbindEvents() {
		this.canvasArea.removeEventListener("mousemove", this.mouseEventHandler.move);
		this.canvasArea.removeEventListener("mousedown", this.mouseEventHandler.down);
		this.canvasArea.removeEventListener("mouseup", this.mouseEventHandler.up);
		this.canvasArea.removeEventListener("mouseout", this.mouseEventHandler.out);
	 }
  }

  export default Canvas;