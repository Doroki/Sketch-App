import Tool from "../classes/tool_class.js"; // Class of tools

const Rect = new Tool('#Rect', '../my-icons-collection/svg/001-color-picker.png');

console.log(Rect);

Rect.startDrawPoints = function(event, canvas) {
    const menuHeight = window.innerHeight - canvas.canvasArea.height;

    return { 
        y: event.clientY - menuHeight, 
        x: event.clientX,
        menuHeight: menuHeight
    }
}

Rect.loadImage = function(canvas) {
    const history = canvas.drawHistory;
    const stateToLoad = history[history.length - 2];


    const canvasHeight = canvas.canvasArea.clientHeight;
    const canvasWidth = canvas.canvasArea.clientWidth;
        
    const imageObj = new Image();
    imageObj.src = stateToLoad;
    imageObj.onload = function() {
        canvas.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        canvas.ctx.drawImage(imageObj, 0, 0);
    };
}

Rect.active = function(e, test) {
    const canvas = test;
	canvas.unbindEvents();
    
    
    console.log(canvas)
	const canvasArea = document.querySelector("#canvas");
	Rect.eventHandler // created to make possiable to remove Event Listener

	canvasArea.addEventListener("mousedown", function(event){
        
		const startPoint = Rect.startDrawPoints(event, canvas);
        console.log(startPoint)
		canvasArea.addEventListener("mousemove", function(e){
            this.loadImage(canvas)
            canvas.ctx.rect(startPoint.x, startPoint.y, e.clientX - startPoint.x, e.clientY - startPoint.y - startPoint.menuHeight);
            canvas.ctx.stroke();
        }.bind(Rect));
    });
}

Rect.inactive = function(e, canvas) {
    
}


export default Rect;