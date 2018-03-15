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

var _text = __webpack_require__(2);

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import OpenFile from "./others-buttons/open_file";
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
var Text = new _text2.default(textButton, Sketch, canvasElement);
// const Rect;

// const SketchStorage = new CanvasStorage(save, Sketch, canvasElement);
// const DownloadImage = new DownloadCanvas(download, canvasElement);
// const LoadFile = new OpenFile(openFile, Sketch);

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

function changeFontSize() {}

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

// save.addEventListener("click", () => SketchStorage.save());
// download.addEventListener("click", () => DownloadImage.downloadCanvas());
// openFile.addEventListener("change", function() {LoadFile.loadFile()});
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextTool = function () {
    function TextTool(buttonElement, canvas, canvasElement) {
        _classCallCheck(this, TextTool);

        this.element = buttonElement;
        this.canvas = canvas;
        this.canvasElement = canvasElement;

        this.lastCursorX = 0;
        this.lastCursorY = 0;
        this.initEvents();
    }

    _createClass(TextTool, [{
        key: "createTextField",
        value: function createTextField(e) {

            this.lastCursorX = e.clientX;
            this.lastCursorY = e.clientY;

            var textField = document.createElement("textarea");
            textField.setAttribute("style", "position: absolute;\n        top: " + this.lastCursorY + "px;\n        left: " + this.lastCursorX + "px;\n        border: 2px dashed #CCCCCC;\n        outline: none;\n        background-color: transparent;\n        z-index: 5000;");
            document.querySelector("body").appendChild(textField);

            this.dragElement(textField);
        }
    }, {
        key: "dragElement",
        value: function dragElement(element) {

            var cursorPositionX = void 0;
            var cursorPositionY = void 0;
            document.addEventListener("resize", function () {
                return console.log("działa");
            });
            // element.addEventListener("mousedown", (e) => {
            //    this.initDragEvent(e, cursorPositionX, cursorPositionY, element)
            // })
        }
    }, {
        key: "initDragEvent",
        value: function initDragEvent(e, cursorPositionX, cursorPositionY, element) {
            var _this = this;

            var _mouseUpHandler = void 0;
            var mouseMoveHandler = void 0;

            this.lastCursorX = e.clientX;
            this.lastCursorY = e.clientY;

            document.addEventListener("mouseup", _mouseUpHandler = function mouseUpHandler() {
                return _this.dropElement(_mouseUpHandler, mouseMoveHandler);
            });
            document.addEventListener("mousemove", mouseMoveHandler = function mouseMoveHandler(e) {
                return _this.moveElement(e, cursorPositionX, cursorPositionY, element);
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
        }
    }, {
        key: "initEvents",
        value: function initEvents() {
            var _this2 = this;

            this.canvasElement.addEventListener("click", function (e) {

                var textField = _this2.createTextField(e);
            });
        }
    }]);

    return TextTool;
}();

exports.default = TextTool;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map