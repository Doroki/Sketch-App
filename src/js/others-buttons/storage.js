

class CanvasStorage {
    constructor(element, canvasElement, canvas) {
        this.canvasElement = canvasElement;
        this.canvas = canvas;
        this.element = element;
    } 

    createLoadModal() {
        const modal = document.createElement("div");
        const info = document.createElement("p");
        const accept = document.createElement("button");
        const cancel = document.createElement("button");
        let eventHandler;

        modal.classList.add("modal");
        info.classList.add("modal__info");
        accept.classList.add("modal__button");
        cancel.classList.add("modal__button");
        
        info.textContent = "Saved image was found, would you like to load it?";
        accept.textContent = "Accept";
        cancel.textContent = "Cancel";

        modal.appendChild(info);
        modal.appendChild(accept);
        modal.appendChild(cancel);

        document.querySelector("body").appendChild(modal);

        modal.addEventListener("click", eventHandler = (e) => {
            if(e.target.classList.contains("modal__button")) {
                if(e.target.textContent === "Accept") {
                    this.load();
                } 

                modal.removeEventListener("click", eventHandler);
                modal.parentNode.removeChild(modal);
            }
        });
    }

    createSaveModal() {
        const modal = document.createElement("div");
        const info = document.createElement("p");

        modal.classList.add("modal");
        info.classList.add("modal__info");

        info.textContent = "Saved...";
        modal.appendChild(info);

        document.querySelector("body").appendChild(modal);

        setTimeout(() => {
            modal.parentNode.removeChild(modal);
        }, 1000);
    }

    checkStorage() {
        if(localStorage.getItem("img") !== null) {
            this.createLoadModal();
        }
    }

    save() {
        const link = this.canvasElement.toDataURL();
  
        localStorage.setItem("img", link);

        this.createSaveModal();
    } 

    load() {
        const link = localStorage.getItem("img");

        const imageObj = new Image();
        imageObj.src = link;
        imageObj.onload = function() {
            this.canvas.ctx.drawImage(imageObj, 0, 0);
        }.bind(this);
    } 
}

export default CanvasStorage;