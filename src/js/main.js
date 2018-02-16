import Canvas from "./canvas_class.js"; // Class of Canvas element

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
const workSpaceWidth = window.innerWidth;
const workSpaceHeight = window.innerHeight - menu.offsetHeight;

const Sketch = new Canvas("#canvas", workSpaceWidth, workSpaceHeight);



class DrawTools {
	constructor() {

	}

	use() {

	}
}