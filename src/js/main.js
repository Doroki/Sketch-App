const buttons = document.querySelector("#paint");



buttons.addEventListener("click", function(e){
	if(e.target.classList.contains("menu__button")) {
		
		e.target.classList.toggle("menu__button--active");
		
		Array.prototype.forEach.call(buttons.children, function(element) {
			if(!(element.classList.contains("menu__button--active"))){
				element.classList.remove("menu__button--active");
			} 
		});
	}
});

const menu = document.querySelector(".menu");
const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - menu.offsetHeight;
const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
	if(!isDrawing) return;

	ctx.fillStyle = '#000000';
	ctx.lineJoin = 'round';
	
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	lastX = e.offsetX;
	lastY = e.offsetY;
}
	
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
	lastX = e.offsetX;
	lastY = e.offsetY;
	isDrawing = true;
});
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
