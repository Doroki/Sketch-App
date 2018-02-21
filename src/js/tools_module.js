
class Tool {
    constructor(idElement, cursorUrl) {
        this.element = document.querySelector(idElement)
        this.cursorUrl = cursorUrl
        this.events();
    }

    disableTools() {
        let activeElement = document.querySelector(".menu__button--active");
        if(!activeElement) return;
        
        activeElement.classList.remove("menu__button--active");
    }

    useTool() {
        this.element.classList.add("menu__button--active"); // set button to active
        document.querySelector(":root").style.setProperty("--canvas-cursor", `url(${this.cursorUrl}), auto`)// change cursor
    };

    events() {
        this.element.addEventListener("click", function() {
            this.disableTools();
            this.useTool();
        }.bind(this));
    }     
}

export default Tool;