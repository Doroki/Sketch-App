/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _canvas_class = __webpack_require__(1);

var _canvas_class2 = _interopRequireDefault(_canvas_class);

var _open_file = __webpack_require__(2);

var _open_file2 = _interopRequireDefault(_open_file);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import DownloadCanvas from "./others-buttons/download";
// import CanvasStorage from "./others-buttons/storage";

// import Undo_Redo from "./others-buttons/undo_redo_class"


/////----------------	ELEMENT HANDLERS ----------------------	/////

// -- menu -- //
///// IMPORT FILES /////
var menu = document.querySelector(".menu");

// -- canvas element -- //
// Class of Canvas element

// import BrushTool from "./basic_tools/brush";
// import EaserTool from "./basic_tools/easer";
// import SprayTool from "./basic_tools/spray";  
// import ColorPickerTool from "./basic_tools/color_picker"; 
// import ReactTool from "./basic_tools/rect"; 
// import TextDrawTool from "./basic_tools/text"; 

var canvasElement = document.querySelector("#canvas");
var workSpaceWidth = window.innerWidth;
var workSpaceHeight = window.innerHeight - menu.offsetHeight;

// -- tool buttons -- //
var brushButton = menu.querySelector("#Brush");
var easerButton = menu.querySelector("#Easer");
var colorPickerButton = menu.querySelector("#Color-Picker");
var sprayButton = menu.querySelector("#Spray");
var textButton = menu.querySelector("#Text");
var rectButton = menu.querySelector("#Rect");

// -- input properties -- //
var toolColor = menu.querySelector("#color-field");
var toolSize = menu.querySelector("#tool-size");

var fontSize = menu.querySelector("#font-size");

// -- others buttons -- //
var save = menu.querySelector("#save");
var download = menu.querySelector("#download");
var openFile = menu.querySelector("#get-file");

var redoButton = menu.querySelector("#redo");
var undoButton = menu.querySelector("#undo");
var cutTool = menu.querySelector("#cut");
var selectTool = menu.querySelector("#select");
var copyTool = menu.querySelector("#copy");

/////----------------	OBJECTS ----------------------	/////

var Sketch = new _canvas_class2.default(canvasElement, workSpaceWidth, workSpaceHeight);

// const Brush = new BrushTool(brushButton, Sketch, '../my-icons-collection/svg/001-color-picker.png');
// const Easer = new EaserTool(easerButton, Sketch, '../my-icons-collection/svg/001-color-picker.png');
// const ColorPicker = new ColorPickerTool(colorPickerButton, Sketch, '../my-icons-collection/svg/001-color-picker.png', canvasElement);
// const Spray = new SprayTool(sprayButton, Sketch, '../my-icons-collection/svg/001-color-picker.png');
// const TextTool = new TextDrawTool(textButton, Sketch, canvasElement, "textarea");
// const Rect;

// const SketchStorage = new CanvasStorage(save, Sketch, canvasElement);
// const DownloadImage = new DownloadCanvas(download, canvasElement);
var LoadFile = new _open_file2.default(openFile, Sketch, canvasElement, "img");

// const DrawHistory = new Undo_Redo(Sketch);
// const SelectArea;
// const CutImage;
// const CopyImage;


// /////////////////////////////////////////////////

function changeColor() {
	Sketch.changeProperties({ color: toolColor.value });
}

function changeToolSize() {
	Sketch.changeProperties({ width: toolSize.value });
}

function changeFontSize() {
	TextTool.setTextStyle({ fontSize: fontSize.value + "px" });
	console.log(TextTool.textPropety);
}

/////----------------	TOOLSET FOR EVENT LISTENER (ENABLE / DISABLE BUTTON)   --------------------/////

// const toolSet = {
// 	"Brush": Brush,
// 	"Easer": Easer,
// 	"Color-Picker": ColorPicker,
// 	"Spray": Spray
// 	// "Rect": Rect
// }

/////----------------	EVENT LISTENERS  ----------------------	/////

// window.addEventListener('load', () => SketchStorage.checkStorage());

toolSize.addEventListener("change", changeToolSize);
toolColor.addEventListener("change", changeColor);
fontSize.addEventListener("change", changeFontSize);
textButton.addEventListener("click", function () {
	return TextTool.use();
});

// save.addEventListener("click", () => SketchStorage.save());
// download.addEventListener("click", () => DownloadImage.downloadCanvas());
openFile.addEventListener("change", function () {
	LoadFile.loadFile();
});
// redoButton.addEventListener("click", () => DrawHistory.redo());
// undoButton.addEventListener("click", () => DrawHistory.undo());


// function disableButton(e) {
// 	let buttonID = document.querySelector("[data-usage=true]").id;
// 	let toolToDisable = toolSet[buttonID];

// 	toolToDisable.disableButton();
// 	toolToDisable.inactive();
// }

// function enableButton(e) {
// 	let buttonID = e.target.id;
// 	let toolToActive = toolSet[buttonID];

// 	toolToActive.enableButton();
// 	toolToActive.active();
// }

// function useButton(e) {
// 	disableButton(e);
// 	enableButton(e);
// }

// menu.addEventListener("click", e => {
// 	if(e.target.hasAttribute("data-usage")){
// 		useButton(e);	
// 	}
// });

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
	function Canvas(canvasElement, width, height) {
		_classCallCheck(this, Canvas);

		// creating canvas object, needed arguments (1. selector of canvas element, 2. width, 3. height)
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
			color: '#000000',
			width: '10',
			style: 'round'
		};

		////// Event handler for unbind method /////
		this.mouseEventHandler = {
			move: null,
			down: null,
			up: null,
			out: null
		};

		//// properties to use for new methods of draw ///
		this.drawMethod = null;

		//// Draw History ////
		this.drawHistory = [];
		this.saveToHistory(); // used during init of object to save blank canvas in history
	}

	_createClass(Canvas, [{
		key: "changeProperties",
		value: function changeProperties(properties) {
			// Function to change drawing properies: color, width, OBJECT AS ARGUMENT OF FUNCTION
			this.drawProperties = _extends({}, this.drawProperties, properties);
		}
	}, {
		key: "draw",
		value: function draw(e) {
			if (!this.isDrawing) return;

			this.ctx.strokeStyle = this.drawProperties.color;
			this.ctx.fillStyle = this.drawProperties.color;
			this.ctx.lineJoin = 'round';
			this.ctx.lineCap = this.drawProperties.style;
			this.ctx.lineWidth = this.drawProperties.width;

			if (typeof this.drawMethod !== "function") {
				// Default settings of draw, useing for Brush or Easer
				this.ctx.beginPath();
				this.ctx.moveTo(this.lastX, this.lastY);
				this.ctx.lineTo(e.offsetX, e.offsetY);
				this.ctx.stroke();
			} else {
				this.drawMethod(e, this); // Other draw methods implemented from tools
			}

			this.lastX = e.offsetX;
			this.lastY = e.offsetY;
		}
	}, {
		key: "saveToHistory",
		value: function saveToHistory() {
			if (this.drawHistory.length > 6) {
				var oldProperties = this.drawHistory.slice(1, 7);
				this.drawHistory = oldProperties;
			}

			this.drawHistory.push(this.canvasArea.toDataURL());
		}
	}, {
		key: "bindEvents",
		value: function bindEvents() {
			var _this = this;

			this.canvasArea.addEventListener("mousemove", this.mouseEventHandler.move = function (e) {
				_this.draw(e);
			});
			this.canvasArea.addEventListener("mousedown", this.mouseEventHandler.down = function (e) {
				_this.isDrawing = true;
				_this.lastX = e.offsetX;
				_this.lastY = e.offsetY;
				_this.draw(e);
			});
			this.canvasArea.addEventListener("mouseup", this.mouseEventHandler.up = function () {
				if (_this.isDrawing) {
					_this.saveToHistory();
					_this.isDrawing = false;
				}
			});
			this.canvasArea.addEventListener("mouseout", this.mouseEventHandler.out = function () {
				if (_this.isDrawing) {
					_this.saveToHistory();
					_this.isDrawing = false;
				}
			});
		}
	}, {
		key: "unbindEvents",
		value: function unbindEvents() {
			this.canvasArea.removeEventListener("mousemove", this.mouseEventHandler.move);
			this.canvasArea.removeEventListener("mousedown", this.mouseEventHandler.down);
			this.canvasArea.removeEventListener("mouseup", this.mouseEventHandler.up);
			this.canvasArea.removeEventListener("mouseout", this.mouseEventHandler.out);
		}
	}]);

	return Canvas;
}();

exports.default = Canvas;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _movableElements_class = __webpack_require__(3);

var _movableElements_class2 = _interopRequireDefault(_movableElements_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpenFile = function (_MovableElements) {
    _inherits(OpenFile, _MovableElements);

    function OpenFile(buttonElement, canvas, canvasElement, elementToCreate) {
        _classCallCheck(this, OpenFile);

        return _possibleConstructorReturn(this, (OpenFile.__proto__ || Object.getPrototypeOf(OpenFile)).call(this, buttonElement, canvas, canvasElement, elementToCreate));
    }

    _createClass(OpenFile, [{
        key: "checkSizeImage",
        value: function checkSizeImage(image) {
            var canvasHeight = this.canvas.canvasArea.clientHeight;
            var canvasWidth = this.canvas.canvasArea.clientWidth;
            var imageWidth = image.naturalWidth;
            var imageHeight = image.naturalHeight;

            if (imageWidth > canvasWidth || imageHeight > canvasHeight) {
                var widthRatio = canvasWidth / imageWidth;
                var heightRatio = canvasHeight / imageHeight;

                var toatlSizeRatio = Math.min(widthRatio, heightRatio); //it always will be fraction, smaller fraction will show longer side of image;
                //to properly scale, it have be scaled by ratio of longer side

                return {
                    x: imageWidth * toatlSizeRatio - 20, // "20" width of margin
                    y: imageHeight * toatlSizeRatio - 20
                };
            } else {
                return {
                    x: imageWidth,
                    y: imageHeight
                };
            }
        }
    }, {
        key: "clearFileInStorage",
        value: function clearFileInStorage() {
            this.element.value = "";
        }
    }, {
        key: "loadFile",
        value: function loadFile() {
            var _this2 = this;

            var _loadEventHandler = void 0;
            this.createContentElement();

            var file = this.element.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function () {
                this.elementToDraw.src = reader.result;
            }.bind(this);

            this.elementToDraw.onload = function () {
                var imageSize = this.checkSizeImage(this.elementToDraw);
                this.elementToDraw.style.width = imageSize.x + "px";
                this.elementToDraw.style.height = imageSize.y + "px";

                this.showContentElement();
            }.bind(this);

            this.canvasElement.addEventListener("click", _loadEventHandler = function loadEventHandler(e) {

                var positionToDraw = _this2.checkPositionOfElement();
                _this2.deleteContentElement();
                _this2.canvas.ctx.drawImage(_this2.elementToDraw, positionToDraw.x, positionToDraw.y, positionToDraw.width, positionToDraw.height);

                _this2.canvasElement.removeEventListener("click", _loadEventHandler);
                _this2.clearFileInStorage();
            });

            this.canvas.saveToHistory();
        }
    }]);

    return OpenFile;
}(_movableElements_class2.default);

exports.default = OpenFile;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovableElements = function () {
    function MovableElements(buttonElement, canvas, canvasElement, elementToCreate) {
        _classCallCheck(this, MovableElements);

        this.element = buttonElement;
        this.canvas = canvas;
        this.canvasElement = canvasElement;
        this.elementToCreate = elementToCreate;
        this.menuHeight = document.querySelector(".menu").offsetHeight;

        this.isFieldOn = false;

        this.pleaceToDraw = {
            x: 0,
            y: 0
        };

        this.lastCursorX = 0;
        this.lastCursorY = 0;
    }

    _createClass(MovableElements, [{
        key: "showContentElement",
        value: function showContentElement(event) {
            var e = event || { clientX: 0, clientY: 0 };
            var wrapper = this.elementToDraw.parentElement;

            this.lastCursorX = e.clientX - 10;
            this.lastCursorY = e.clientY - 10 + this.menuHeight;

            wrapper.style.top = this.lastCursorY + "px";
            wrapper.style.left = this.lastCursorX + "px";

            document.querySelector("body").appendChild(wrapper);
        }
    }, {
        key: "createContentElement",
        value: function createContentElement() {

            var wrapper = document.createElement("div");
            this.elementToDraw = document.createElement("" + this.elementToCreate);
            var resizeHandler = document.createElement("span");

            wrapper.setAttribute("style", "position: absolute;\n        top: 100px;\n        left: 100px;\n        background-color: transparent;\n        z-index: 500;");

            this.elementToDraw.setAttribute("style", "border: 2px dashed #000;\n        margin: 10px;\n        padding: 0px;\n        background-color: transparent;\n        z-index: 5000;\n        resize: none;");

            resizeHandler.setAttribute("style", "display: inline-block;\n        width: 20px;\n        height: 20px;\n        border: 2px dashed #000;\n        background-color: #000;\n        margin-right: -20px;\n        margin-bottom: -20px;\n        z-index: 5000;");

            wrapper.appendChild(this.elementToDraw);
            wrapper.appendChild(resizeHandler);

            this.dragElement(wrapper);
            this.resizeEvent(wrapper, resizeHandler);
        }
    }, {
        key: "deleteContentElement",
        value: function deleteContentElement() {
            var wrapper = this.elementToDraw.parentElement;

            wrapper.remove();
        }
    }, {
        key: "checkPositionOfElement",
        value: function checkPositionOfElement() {
            var wrapper = this.elementToDraw.parentElement;
            this.pleaceToDraw.x = wrapper.offsetLeft + 12; // "14" width of margin + border + padding
            this.pleaceToDraw.y = wrapper.offsetTop + 12 - this.menuHeight;

            return {
                x: wrapper.offsetLeft + 12,
                y: wrapper.offsetTop + 12 - this.menuHeight,
                width: this.elementToDraw.offsetWidth,
                height: this.elementToDraw.offsetHeight
            };
        }

        ///////// ---------------------  RESIZE ELEMENT ----------------------- //////////

    }, {
        key: "resizeEvent",
        value: function resizeEvent(wrapper, resizeHandler) {
            var _this = this;

            resizeHandler.addEventListener("mousedown", function (e) {
                e.preventDefault();
                _this.initResizeEvent(e, wrapper);
            });
        }
    }, {
        key: "initResizeEvent",
        value: function initResizeEvent(e, container) {
            var _this2 = this;

            var elementPositionY = container.offsetTop;
            var elementPositionX = container.offsetLeft;

            var _mouseUpHandler = void 0;
            var mouseMoveHandler = void 0;

            document.addEventListener("mouseup", _mouseUpHandler = function mouseUpHandler() {
                return _this2.stopResizeElement(_mouseUpHandler, mouseMoveHandler);
            });
            document.addEventListener("mousemove", mouseMoveHandler = function mouseMoveHandler(e) {
                return _this2.resizeElement(e, elementPositionX, elementPositionY, container);
            });
        }
    }, {
        key: "resizeElement",
        value: function resizeElement(e, x, y, container) {

            var cursorPositionY = e.clientY - y - 25;
            var cursorPositionX = e.clientX - x - 25;

            this.elementToDraw.style.width = cursorPositionX + "px";
            this.elementToDraw.style.height = cursorPositionY + "px";
        }
    }, {
        key: "stopResizeElement",
        value: function stopResizeElement(mouseUpHandler, mouseMoveHandler) {

            document.removeEventListener("mouseup", mouseUpHandler);
            document.removeEventListener("mousemove", mouseMoveHandler);

            this.checkPositionOfElement();
        }

        ///////// ---------------------  DRAG & DROP ELEMENT ----------------------- //////////

    }, {
        key: "dragElement",
        value: function dragElement(wrapper) {
            var _this3 = this;

            var cursorPositionX = void 0;
            var cursorPositionY = void 0;

            this.elementToDraw.addEventListener("mousedown", function (e) {
                e.preventDefault();
                _this3.initDragEvent(e, cursorPositionX, cursorPositionY, wrapper);
            });
        }
    }, {
        key: "initDragEvent",
        value: function initDragEvent(e, cursorPositionX, cursorPositionY, element) {
            var _this4 = this;

            var _mouseUpHandler2 = void 0;
            var mouseMoveHandler = void 0;

            this.lastCursorX = e.clientX;
            this.lastCursorY = e.clientY;

            document.addEventListener("mouseup", _mouseUpHandler2 = function mouseUpHandler() {
                return _this4.dropElement(_mouseUpHandler2, mouseMoveHandler);
            });
            document.addEventListener("mousemove", mouseMoveHandler = function mouseMoveHandler(e) {
                return _this4.moveElement(e, cursorPositionX, cursorPositionY, element);
            });
        }
    }, {
        key: "moveElement",
        value: function moveElement(e, cursorPositionX, cursorPositionY, element) {

            cursorPositionX = this.lastCursorX - e.clientX;
            cursorPositionY = this.lastCursorY - e.clientY;
            this.lastCursorX = e.clientX;
            this.lastCursorY = e.clientY;

            element.style.top = element.offsetTop - cursorPositionY + "px";
            element.style.left = element.offsetLeft - cursorPositionX + "px";
        }
    }, {
        key: "dropElement",
        value: function dropElement(mouseUpHandler, mouseMoveHandler) {

            document.removeEventListener("mouseup", mouseUpHandler);
            document.removeEventListener("mousemove", mouseMoveHandler);

            this.checkPositionOfElement();
        }
    }, {
        key: "use",
        value: function use() {
            var _this5 = this;

            this.canvasElement.addEventListener("click", function (e) {
                if (_this5.isFieldOn) {
                    _this5.deleteContentElement();
                    _this5.isFieldOn = false;
                } else {
                    _this5.showContentElement(e);
                    _this5.isFieldOn = true;
                }
            });
        }
    }]);

    return MovableElements;
}();

exports.default = MovableElements;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map