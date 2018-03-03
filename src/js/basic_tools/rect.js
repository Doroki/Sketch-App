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


Rect.active = function(e, test) {
    const canvas = test;
	canvas.unbindEvents();
    
    
    console.log(canvas)
	const canvasArea = document.querySelector("#canvas");
	Rect.eventHandler // created to make possiable to remove Event Listener

	canvasArea.addEventListener("mousedown", function(event){
        
        canvas.ctx.clearRect(0,0,50,50);
		const startPoint = Rect.startDrawPoints(event, canvas);
        console.log(startPoint)
		canvasArea.addEventListener("mousemove", function(e){
            canvas.ctx.rect(startPoint.x, startPoint.y, e.clientX - startPoint.x, e.clientY - startPoint.y - startPoint.menuHeight);
            canvas.ctx.stroke();
            console.log(e);
        });
    });
}

Rect.inactive = function(e, canvas) {
    
}


export default Rect;