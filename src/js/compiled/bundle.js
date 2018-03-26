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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tool = function () {
    function Tool(elementButton, canvasObject, cursorUrl) {
        var canvasElement = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        _classCallCheck(this, Tool);

        this.element = elementButton;
        this.canvas = canvasObject;
        this.cursorUrl = cursorUrl;
        this.canvasElement = canvasElement;
    }

    _createClass(Tool, [{
        key: "disableButton",
        value: function disableButton() {
            this.element.classList.remove("menu__button--active");
            this.element.dataset.usage = "false";
        }
    }, {
        key: "enableButton",
        value: function enableButton() {
            this.element.classList.add("menu__button--active"); // set button to active
            this.element.dataset.usage = "true";
            document.querySelector(":root").style.setProperty("--canvas-cursor", "url(" + this.cursorUrl + "), auto"); // change cursor
        }
    }]);

    return Tool;
}();

exports.default = Tool;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OtherTools = function OtherTools(elementButton, canvasObject, canvasElement) {
    _classCallCheck(this, OtherTools);

    this.element = elementButton;
    this.canvas = canvasObject;
    this.canvasElement = canvasElement;
};

exports.default = OtherTools;

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

var AdvancedTool = function (_MovableElements) {
    _inherits(AdvancedTool, _MovableElements);

    function AdvancedTool(elementButton, canvasObject) {
        var canvasElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var elementToCreate = arguments[3];

        _classCallCheck(this, AdvancedTool);

        var _this = _possibleConstructorReturn(this, (AdvancedTool.__proto__ || Object.getPrototypeOf(AdvancedTool)).call(this, elementButton, canvasObject, canvasElement, elementToCreate));

        _this.toolIsActive = false;
        _this.button;
        return _this;
    }

    _createClass(AdvancedTool, [{
        key: "disableButton",
        value: function disableButton() {
            this.button.classList.remove("menu__button--active");
            this.button.dataset.usage = "false";
        }
    }, {
        key: "enableButton",
        value: function enableButton() {
            this.button.classList.add("menu__button--active"); // set button to active
            this.button.dataset.usage = "true";
            document.querySelector(":root").style.setProperty("--canvas-cursor", "url(" + this.cursorUrl + "), auto"); // change cursor
        }
    }]);

    return AdvancedTool;
}(_movableElements_class2.default);

exports.default = AdvancedTool;

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
            var e = event || { clientX: 0, clientY: this.menuHeight };
            var wrapper = this.elementToDraw.parentElement;

            this.lastCursorX = e.clientX - 10;
            this.lastCursorY = e.clientY - 10;

            wrapper.style.top = this.lastCursorY + "px";
            wrapper.style.left = this.lastCursorX + "px";

            document.querySelector("body").appendChild(wrapper);
            // this.initResizeEvent(event, wrapper);
        }
    }, {
        key: "createContentElement",
        value: function createContentElement(tag) {

            var wrapper = document.createElement("div");
            this.elementToDraw = document.createElement(tag || "" + this.elementToCreate);
            var resizeHandler = document.createElement("span");

            this.elementToDraw.id = "selection";
            this.elementToDraw.classList.add("main-element");
            wrapper.classList.add("wrapper");
            resizeHandler.classList.add("resizer");

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
            this.pleaceToDraw.x = wrapper.offsetLeft + 14; // "14" width of margin + border + padding
            this.pleaceToDraw.y = wrapper.offsetTop + 14 - this.menuHeight;

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
                if (_this3.elementToDraw.localName !== "textarea") e.preventDefault();
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

            this.newPositionX = element.offsetLeft;
            this.newPositionY = element.offsetTop;

            document.addEventListener("mouseup", _mouseUpHandler2 = function mouseUpHandler() {
                return _this4.dropElement(_mouseUpHandler2, mouseMoveHandler);
            });
            document.addEventListener("mousemove", mouseMoveHandler = function mouseMoveHandler(e) {
                return _this4.moveElement(e, cursorPositionX, cursorPositionY, element);
            });
        }
    }, {
        key: "moveElement",
        value: function moveElement(e, x, y, element) {

            var cursorPositionX = this.lastCursorX - e.clientX;
            var cursorPositionY = this.lastCursorY - e.clientY;
            this.lastCursorX = e.clientX;
            this.lastCursorY = e.clientY;

            this.newPositionX = this.newPositionX - cursorPositionX;
            this.newPositionY = this.newPositionY - cursorPositionY;

            element.style.top = this.newPositionY + "px";
            element.style.left = this.newPositionX + "px";
        }
    }, {
        key: "dropElement",
        value: function dropElement(mouseUpHandler, mouseMoveHandler) {

            document.removeEventListener("mouseup", mouseUpHandler);
            document.removeEventListener("mousemove", mouseMoveHandler);

            this.checkPositionOfElement();
        }
    }]);

    return MovableElements;
}();

exports.default = MovableElements;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _canvas_class = __webpack_require__(5);

var _canvas_class2 = _interopRequireDefault(_canvas_class);

var _brush = __webpack_require__(6);

var _brush2 = _interopRequireDefault(_brush);

var _easer = __webpack_require__(7);

var _easer2 = _interopRequireDefault(_easer);

var _spray = __webpack_require__(8);

var _spray2 = _interopRequireDefault(_spray);

var _color_picker = __webpack_require__(9);

var _color_picker2 = _interopRequireDefault(_color_picker);

var _text = __webpack_require__(10);

var _text2 = _interopRequireDefault(_text);

var _open_file = __webpack_require__(11);

var _open_file2 = _interopRequireDefault(_open_file);

var _download = __webpack_require__(12);

var _download2 = _interopRequireDefault(_download);

var _storage = __webpack_require__(13);

var _storage2 = _interopRequireDefault(_storage);

var _select = __webpack_require__(14);

var _select2 = _interopRequireDefault(_select);

var _undo_redo_class = __webpack_require__(15);

var _undo_redo_class2 = _interopRequireDefault(_undo_redo_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////----------------	ELEMENT HANDLERS ----------------------	/////

// -- menu -- //
// Class of Canvas element

var menu = document.querySelector(".menu");

// -- canvas element -- //
///// IMPORT FILES /////
var canvasElement = document.querySelector("#canvas");
var workSpaceWidth = window.innerWidth;
var workSpaceHeight = window.innerHeight - menu.offsetHeight;

// -- tool buttons -- //
var brushButton = menu.querySelector("#Brush");
var easerButton = menu.querySelector("#Easer");
var colorPickerButton = menu.querySelector("#Color-Picker");
var sprayButton = menu.querySelector("#Spray");
var textButton = menu.querySelector("#Text");

// -- input properties -- //
var toolColor = menu.querySelector("#color-field");
var toolSize = menu.querySelector("#tool-size");

var fontSize = menu.querySelector("#font-size");
var fontColor = menu.querySelector("#color-font");
var fontBold = menu.querySelector("#bold");
var fontItalic = menu.querySelector("#italic");

// -- others buttons -- //
var save = menu.querySelector("#save");
var download = menu.querySelector("#download");
var openFile = menu.querySelector("#get-file");

var redoButton = menu.querySelector("#redo");
var undoButton = menu.querySelector("#undo");

var selectTool = menu.querySelector("#Select");
var cutTool = menu.querySelector("#cut");
var copyTool = menu.querySelector("#copy");
var pasteTool = menu.querySelector("#paste");

var copyToolSet = {
	selectTool: selectTool,
	cutTool: cutTool,
	copyTool: copyTool,
	pasteTool: pasteTool

	/////----------------	OBJECTS ----------------------	/////

};var Sketch = new _canvas_class2.default(canvasElement, workSpaceWidth, workSpaceHeight);

var Brush = new _brush2.default(brushButton, Sketch, '../my-icons-collection/svg/001-color-picker.png');
var Easer = new _easer2.default(easerButton, Sketch, '../my-icons-collection/svg/001-color-picker.png');
var ColorPicker = new _color_picker2.default(colorPickerButton, Sketch, '../my-icons-collection/svg/001-color-picker.png', canvasElement);
var Spray = new _spray2.default(sprayButton, Sketch, '../my-icons-collection/svg/001-color-picker.png');
var TextTool = new _text2.default(textButton, Sketch, canvasElement, "textarea");
// const Rect;

var SketchStorage = new _storage2.default(save, Sketch, canvasElement);
var DownloadImage = new _download2.default(download, canvasElement);
var LoadFile = new _open_file2.default(openFile, Sketch, canvasElement, "img");

var DrawHistory = new _undo_redo_class2.default(Sketch);
var SelectArea = new _select2.default(copyToolSet, Sketch, canvasElement, "div");

/////----------------	TOOLSET FOR EVENT LISTENER (ENABLE / DISABLE BUTTON)   --------------------/////

var toolSet = {
	"Brush": Brush,
	"Easer": Easer,
	"Color-Picker": ColorPicker,
	"Spray": Spray,
	"Text": TextTool,
	// "Rect": Rect
	"Select": SelectArea

	/////----------------	EVENT LISTENERS  ----------------------	/////

};window.addEventListener('load', function () {
	return SketchStorage.checkStorage();
});

toolSize.addEventListener("change", Sketch.changeProperties({ width: toolSize.value }));
toolColor.addEventListener("change", Sketch.changeProperties({ color: toolColor.value }));

fontSize.addEventListener("change", function () {
	TextTool.setTextStyle({ fontSize: fontSize.value + "px" });
	if (TextTool.elementToDraw.localName === "textarea") TextTool.textareaStyle();
});
fontColor.addEventListener("change", function () {
	TextTool.setTextStyle({ textColor: fontColor.value });
	if (TextTool.elementToDraw.localName === "textarea") TextTool.textareaStyle();
});
fontBold.addEventListener("click", function () {
	if (fontBold.dataset.active === "false") {
		TextTool.setTextStyle({ fontWeight: "bold" });
		fontBold.classList.add("menu__button--active");
		fontBold.dataset.active = "true";
		if (TextTool.elementToDraw.localName === "textarea") TextTool.textareaStyle();
	} else {
		TextTool.setTextStyle({ fontWeight: "normal" });
		fontBold.classList.remove("menu__button--active");
		fontBold.dataset.active = "false";
		if (TextTool.elementToDraw.localName === "textarea") TextTool.textareaStyle();
	}
});
fontItalic.addEventListener("click", function () {
	if (fontItalic.dataset.active === "false") {
		TextTool.setTextStyle({ fontStyle: "italic" });
		fontItalic.classList.add("menu__button--active");
		fontItalic.dataset.active = "true";
		if (TextTool.elementToDraw.localName === "textarea") TextTool.textareaStyle();
	} else {
		TextTool.setTextStyle({ fontStyle: "normal" });
		fontItalic.classList.remove("menu__button--active");
		fontItalic.dataset.active = "false";
		if (TextTool.elementToDraw.localName === "textarea") TextTool.textareaStyle();
	}
});

save.addEventListener("click", function () {
	return SketchStorage.save();
});
download.addEventListener("click", function () {
	return DownloadImage.downloadCanvas();
});
openFile.addEventListener("change", function () {
	LoadFile.loadFile();
});
redoButton.addEventListener("click", function () {
	return DrawHistory.redo();
});
undoButton.addEventListener("click", function () {
	return DrawHistory.undo();
});

// -- "Copy / Paste" functionality -- //
cutTool.addEventListener("click", function () {
	return SelectArea.cutSelectedArea();
});
copyTool.addEventListener("click", function () {
	return SelectArea.copySelectedArea();
});
pasteTool.addEventListener("click", function () {
	return SelectArea.pasteCopiedArea();
});

function disableButton(e) {
	var buttonID = document.querySelector("[data-usage=true]").id;
	var toolToDisable = toolSet[buttonID];

	toolToDisable.disableButton();
	toolToDisable.inactive();
}

function enableButton(e) {
	var buttonID = e.target.id;
	var toolToActive = toolSet[buttonID];

	toolToActive.enableButton();
	toolToActive.active();
}

function useButton(e) {
	disableButton(e);
	enableButton(e);
}

menu.addEventListener("click", function (e) {
	if (e.target.hasAttribute("data-usage")) {
		useButton(e);
	}
});

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tool_class = __webpack_require__(0);

var _tool_class2 = _interopRequireDefault(_tool_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Class of tools

var BrushTool = function (_Tool) {
    _inherits(BrushTool, _Tool);

    function BrushTool() {
        _classCallCheck(this, BrushTool);

        return _possibleConstructorReturn(this, (BrushTool.__proto__ || Object.getPrototypeOf(BrushTool)).apply(this, arguments));
    }

    _createClass(BrushTool, [{
        key: "active",
        value: function active() {

            var paintColor = document.querySelector("[type=color]").value;
            this.canvas.changeProperties({ color: paintColor, drawStyle: "line" });
            this.canvas.bindEvents();
        }
    }, {
        key: "inactive",
        value: function inactive() {
            this.canvas.unbindEvents();
        }
    }]);

    return BrushTool;
}(_tool_class2.default);

exports.default = BrushTool;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tool_class = __webpack_require__(0);

var _tool_class2 = _interopRequireDefault(_tool_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Class of tools

var EaserTool = function (_Tool) {
    _inherits(EaserTool, _Tool);

    function EaserTool() {
        _classCallCheck(this, EaserTool);

        return _possibleConstructorReturn(this, (EaserTool.__proto__ || Object.getPrototypeOf(EaserTool)).apply(this, arguments));
    }

    _createClass(EaserTool, [{
        key: "active",
        value: function active() {

            this.canvas.changeProperties({ drawStyle: "line", color: "#ffffff" });
            document.querySelector("#color-field").disabled = true;
            this.canvas.bindEvents();
        }
    }, {
        key: "inactive",
        value: function inactive() {
            document.querySelector("#color-field").disabled = false;
            this.canvas.unbindEvents();
        }
    }]);

    return EaserTool;
}(_tool_class2.default);

exports.default = EaserTool;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tool_class = __webpack_require__(0);

var _tool_class2 = _interopRequireDefault(_tool_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Class of tools

var SprayTool = function (_Tool) {
    _inherits(SprayTool, _Tool);

    function SprayTool() {
        _classCallCheck(this, SprayTool);

        return _possibleConstructorReturn(this, (SprayTool.__proto__ || Object.getPrototypeOf(SprayTool)).apply(this, arguments));
    }

    _createClass(SprayTool, [{
        key: "getRandomPosition",
        value: function getRandomPosition(spraySize) {
            var randomAngle = Math.random() * 360;
            var randomRadius = Math.random() * spraySize;

            return {
                angle: Math.cos(randomAngle) * randomRadius,
                radius: Math.sin(randomAngle) * randomRadius
            };
        }
    }, {
        key: "paint",
        value: function paint(e) {
            var spraySize = this.canvas.ctx.lineWidth;
            var density = 60 * (spraySize / 5);

            for (var i = 0; i < density; i++) {

                var offset = this.getRandomPosition(spraySize);
                var x = offset.angle + e.offsetX;
                var y = offset.radius + e.offsetY;

                this.canvas.ctx.fillRect(x, y, 1, 1);
            }
        }
    }, {
        key: "active",
        value: function active() {

            this.canvas.bindEvents();
            this.canvas.drawMethod = this.paint.bind(this);
        }
    }, {
        key: "inactive",
        value: function inactive() {

            this.canvas.unbindEvents();
            this.canvas.drawMethod = null;
        }
    }]);

    return SprayTool;
}(_tool_class2.default);

exports.default = SprayTool;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tool_class = __webpack_require__(0);

var _tool_class2 = _interopRequireDefault(_tool_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Class of tools

var ColorPickerTool = function (_Tool) {
	_inherits(ColorPickerTool, _Tool);

	function ColorPickerTool() {
		_classCallCheck(this, ColorPickerTool);

		return _possibleConstructorReturn(this, (ColorPickerTool.__proto__ || Object.getPrototypeOf(ColorPickerTool)).apply(this, arguments));
	}

	_createClass(ColorPickerTool, [{
		key: "checkColor",
		value: function checkColor(e) {

			var colorData = this.canvas.ctx.getImageData(e.offsetX, e.offsetY, 1, 1);

			var rgbColor = {
				red: colorData.data[0],
				green: colorData.data[1],
				blue: colorData.data[2]
			};

			var hexColor = {
				red: rgbColor.red.toString(16),
				green: rgbColor.green.toString(16),
				blue: rgbColor.blue.toString(16)
			};

			document.querySelector("#color-field").value = "#" + hexColor.red + hexColor.green + hexColor.blue;
		}
	}, {
		key: "active",
		value: function active() {
			var _this2 = this;

			this.canvas.unbindEvents();

			this.eventHandler; // created to make possiable to remove Event Listener

			this.canvasElement.addEventListener("click", this.eventHandler = function (event) {
				_this2.checkColor(event);
			});
		}
	}, {
		key: "inactive",
		value: function inactive() {
			var _this3 = this;

			this.canvasElement.removeEventListener("click", function () {
				return _this3.eventHandler();
			});
		}
	}]);

	return ColorPickerTool;
}(_tool_class2.default);

exports.default = ColorPickerTool;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _advancedTools = __webpack_require__(2);

var _advancedTools2 = _interopRequireDefault(_advancedTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextDrawTool = function (_AdvancedTools) {
    _inherits(TextDrawTool, _AdvancedTools);

    function TextDrawTool(elementButton, canvasObject, canvasElement, elementToCreate) {
        _classCallCheck(this, TextDrawTool);

        var _this = _possibleConstructorReturn(this, (TextDrawTool.__proto__ || Object.getPrototypeOf(TextDrawTool)).call(this, elementButton, canvasObject, canvasElement, elementToCreate));

        _this.button = _this.element;

        _this.textPropety = {
            fontFamily: "sans-serif",
            textColor: "#000000",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "normal"
        };
        return _this;
    }

    _createClass(TextDrawTool, [{
        key: "setTextStyle",
        value: function setTextStyle(properties) {
            this.textPropety = _extends({}, this.textPropety, properties);
        }
    }, {
        key: "useTextStyle",
        value: function useTextStyle() {
            this.elementToDraw.style.fontFamily = this.textPropety.fontFamily;
            this.elementToDraw.style.color = this.textPropety.textColor;
            this.elementToDraw.style.fontSize = this.textPropety.fontSize;
            this.elementToDraw.style.fontStyle = this.textPropety.fontStyle;
            this.elementToDraw.style.fontWeight = this.textPropety.fontWeight;
        }
    }, {
        key: "drawText",
        value: function drawText() {
            this.canvas.ctx.font = "\n            " + this.textPropety.fontStyle + "\n            " + this.textPropety.fontWeight + "\n            " + this.textPropety.fontSize + "\n            " + this.textPropety.fontFamily;

            this.canvas.ctx.fillStyle = this.textPropety.textColor;
            this.canvas.ctx.fillText(this.elementToDraw.value, this.pleaceToDraw.x, this.pleaceToDraw.y);
            this.canvas.saveToHistory();
        }
    }, {
        key: "textareaStyle",
        value: function textareaStyle() {
            this.elementToDraw.style.fontStyle = "" + this.textPropety.fontStyle;
            this.elementToDraw.style.fontWeight = "" + this.textPropety.fontWeight;
            this.elementToDraw.style.fontSize = "" + this.textPropety.fontSize;
            this.elementToDraw.style.fontFamily = "" + this.textPropety.fontFamily;
            this.elementToDraw.style.color = "" + this.textPropety.textColor;
        }
    }, {
        key: "bindEvents",
        value: function bindEvents() {
            var _this2 = this;

            this.canvasElement.addEventListener("mousedown", this.mdownEventHandler = function (e) {

                if (_this2.toolIsActive) {
                    _this2.drawText();
                    _this2.deleteContentElement();
                    _this2.toolIsActive = false;
                } else {
                    _this2.createContentElement();
                    _this2.showContentElement(e);
                    _this2.initResizeEvent(e, _this2.elementToDraw.parentElement);
                    _this2.toolIsActive = true;
                }
            });
        }
    }, {
        key: "unbindEvents",
        value: function unbindEvents() {
            this.canvasElement.removeEventListener("mousedown", this.mdownEventHandler);
            document.removeEventListener("mousedown", this.removeSelection);
        }
    }, {
        key: "active",
        value: function active() {
            if (this.toolIsActive) return;

            this.bindEvents();
        }
    }, {
        key: "inactive",
        value: function inactive() {
            if (this.toolIsActive) return;
            this.unbindEvents();
            this.deleteContentElement();
            this.toolIsActive = false;
        }
    }]);

    return TextDrawTool;
}(_advancedTools2.default);

exports.default = TextDrawTool;

/***/ }),
/* 11 */
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

                _this2.clearFileInStorage();
                _this2.canvas.saveToHistory();
                _this2.canvasElement.removeEventListener(e.type, _loadEventHandler);
            });
        }
    }]);

    return OpenFile;
}(_movableElements_class2.default);

exports.default = OpenFile;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _otherTools_class = __webpack_require__(1);

var _otherTools_class2 = _interopRequireDefault(_otherTools_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DownloadCanvas = function (_OtherTools) {
    _inherits(DownloadCanvas, _OtherTools);

    function DownloadCanvas(element, canvasElement) {
        _classCallCheck(this, DownloadCanvas);

        var _this = _possibleConstructorReturn(this, (DownloadCanvas.__proto__ || Object.getPrototypeOf(DownloadCanvas)).call(this, element, canvasElement));

        _this.fileName = "my_image.png";
        return _this;
    }

    _createClass(DownloadCanvas, [{
        key: "downloadCanvas",
        value: function downloadCanvas() {
            var link = this.canvas.toDataURL();

            this.element.download = this.fileName;
            this.element.href = link;
        }
    }]);

    return DownloadCanvas;
}(_otherTools_class2.default);

exports.default = DownloadCanvas;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _otherTools_class = __webpack_require__(1);

var _otherTools_class2 = _interopRequireDefault(_otherTools_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasStorage = function (_OtherTools) {
    _inherits(CanvasStorage, _OtherTools);

    function CanvasStorage() {
        _classCallCheck(this, CanvasStorage);

        return _possibleConstructorReturn(this, (CanvasStorage.__proto__ || Object.getPrototypeOf(CanvasStorage)).apply(this, arguments));
    }

    _createClass(CanvasStorage, [{
        key: "createLoadModal",
        value: function createLoadModal() {
            var _this2 = this;

            var modal = document.createElement("div");
            var info = document.createElement("p");
            var accept = document.createElement("button");
            var cancel = document.createElement("button");
            var _eventHandler = void 0;

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

            modal.addEventListener("click", _eventHandler = function eventHandler(e) {
                if (e.target.classList.contains("modal__button")) {
                    if (e.target.textContent === "Accept") {
                        _this2.load();
                    }

                    modal.removeEventListener("click", _eventHandler);
                    modal.parentNode.removeChild(modal);
                }
            });
        }
    }, {
        key: "createSaveModal",
        value: function createSaveModal() {
            var modal = document.createElement("div");
            var info = document.createElement("p");

            modal.classList.add("modal");
            info.classList.add("modal__info");

            info.textContent = "Saved...";
            modal.appendChild(info);

            document.querySelector("body").appendChild(modal);

            setTimeout(function () {
                modal.parentNode.removeChild(modal);
            }, 1000);
        }
    }, {
        key: "checkStorage",
        value: function checkStorage() {
            if (localStorage.getItem("img") !== null) {
                this.createLoadModal();
            }
        }
    }, {
        key: "save",
        value: function save() {
            var link = this.canvasElement.toDataURL();

            localStorage.setItem("img", link);

            this.createSaveModal();
        }
    }, {
        key: "load",
        value: function load() {
            var link = localStorage.getItem("img");

            var imageObj = new Image();
            imageObj.src = link;
            imageObj.onload = function () {
                this.canvas.ctx.drawImage(imageObj, 0, 0);
            }.bind(this);
        }
    }]);

    return CanvasStorage;
}(_otherTools_class2.default);

exports.default = CanvasStorage;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _advancedTools = __webpack_require__(2);

var _advancedTools2 = _interopRequireDefault(_advancedTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectCanvasArea = function (_AdvancedTools) {
    _inherits(SelectCanvasArea, _AdvancedTools);

    function SelectCanvasArea(buttonElement, canvas, canvasElement, elementToCreate) {
        _classCallCheck(this, SelectCanvasArea);

        var _this = _possibleConstructorReturn(this, (SelectCanvasArea.__proto__ || Object.getPrototypeOf(SelectCanvasArea)).call(this, buttonElement, canvas, canvasElement, elementToCreate));

        _this.copyMemory;
        _this.button = _this.element.selectTool;
        return _this;
    }

    _createClass(SelectCanvasArea, [{
        key: "removeSelection",
        value: function removeSelection() {
            this.deleteContentElement();
            this.disableCopyButtons();
        }

        //// ---------  COPY / PASTE / CUT BUTTONS ----------- /////

    }, {
        key: "enablePasteButton",
        value: function enablePasteButton() {
            this.element.pasteTool.removeAttribute("disabled");
            this.element.pasteTool.classList.remove("menu__button--disabled");
        }
    }, {
        key: "enableCopyButtons",
        value: function enableCopyButtons() {
            this.element.copyTool.removeAttribute("disabled");
            this.element.cutTool.removeAttribute("disabled");
            this.element.copyTool.classList.remove("menu__button--disabled");
            this.element.cutTool.classList.remove("menu__button--disabled");
        }
    }, {
        key: "disableCopyButtons",
        value: function disableCopyButtons() {
            this.element.copyTool.setAttribute("disabled", "disabled");
            this.element.cutTool.setAttribute("disabled", "disabled");
            this.element.copyTool.classList.add("menu__button--disabled");
            this.element.cutTool.classList.add("menu__button--disabled");
        }
    }, {
        key: "copySelectedArea",
        value: function copySelectedArea() {
            var areaPositionToCopy = this.checkPositionOfElement();
            this.copyMemory = this.canvas.ctx.getImageData(areaPositionToCopy.x, areaPositionToCopy.y, areaPositionToCopy.width, areaPositionToCopy.height);
            this.enablePasteButton();

            return areaPositionToCopy;
        }
    }, {
        key: "cutSelectedArea",
        value: function cutSelectedArea() {
            var cordsToClear = this.copySelectedArea();
            this.canvas.ctx.clearRect(cordsToClear.x, cordsToClear.y, cordsToClear.width, cordsToClear.height);
        }
    }, {
        key: "getImage",
        value: function getImage(width, height) {
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            var context = canvas.getContext("2d");
            context.putImageData(this.copyMemory, 0, 0);

            return canvas.toDataURL();
        }
    }, {
        key: "loadCopiedImg",
        value: function loadCopiedImg() {

            var image = this.getImage(this.copyMemory.width, this.copyMemory.height);
            this.createContentElement("img");
            this.elementToDraw.src = image;
            this.elementToDraw.style.width = this.copyMemory.width + "px";
            this.elementToDraw.style.height = this.copyMemory.height + "px";
            this.showContentElement();
        }
    }, {
        key: "pasteCopiedArea",
        value: function pasteCopiedArea() {
            var _this2 = this;

            var _pasteEventHandler = void 0;

            this.inactive(); // remove select tool events for a while;
            this.loadCopiedImg();

            this.canvasElement.addEventListener("mousedown", _pasteEventHandler = function pasteEventHandler(e) {
                e.preventDefault();
                var positionToDraw = _this2.checkPositionOfElement();
                _this2.deleteContentElement();
                _this2.canvas.ctx.drawImage(_this2.elementToDraw, positionToDraw.x, positionToDraw.y, positionToDraw.width, positionToDraw.height);
                _this2.canvas.saveToHistory();
                _this2.active(); // add select tool events;
                _this2.canvasElement.removeEventListener(e.type, _pasteEventHandler);
            });
            // this.canvas.saveToHistory();
        }

        //// ---------  EVENTS ----------- /////


    }, {
        key: "bindEvents",
        value: function bindEvents() {
            var _this3 = this;

            this.canvasElement.addEventListener("mousedown", this.mdownEventHandler = function (e) {

                if (_this3.toolIsActive) {
                    _this3.removeSelection();
                    _this3.toolIsActive = false;
                } else {
                    _this3.createContentElement();
                    _this3.showContentElement(e);
                    _this3.enableCopyButtons();
                    _this3.initResizeEvent(e, _this3.elementToDraw.parentElement);
                    _this3.toolIsActive = true;
                }
            });
        }
    }, {
        key: "unbindEvents",
        value: function unbindEvents() {
            this.canvasElement.removeEventListener("mousedown", this.mdownEventHandler);
            document.removeEventListener("mousedown", this.removeSelection);
        }
    }, {
        key: "active",
        value: function active() {
            this.bindEvents();
        }
    }, {
        key: "inactive",
        value: function inactive() {
            this.unbindEvents();
            this.removeSelection();
            this.toolIsActive = false;
        }
    }]);

    return SelectCanvasArea;
}(_advancedTools2.default);

exports.default = SelectCanvasArea;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _otherTools_class = __webpack_require__(1);

var _otherTools_class2 = _interopRequireDefault(_otherTools_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Undo_Redo = function (_OtherTools) {
    _inherits(Undo_Redo, _OtherTools);

    function Undo_Redo(canvasElement) {
        _classCallCheck(this, Undo_Redo);

        var _this = _possibleConstructorReturn(this, (Undo_Redo.__proto__ || Object.getPrototypeOf(Undo_Redo)).call(this, null, canvasElement));

        _this.undoHistory = [];
        return _this;
    }

    _createClass(Undo_Redo, [{
        key: "loadState",
        value: function loadState(url) {
            var canvasHeight = this.canvas.canvasArea.clientHeight;
            var canvasWidth = this.canvas.canvasArea.clientWidth;

            var imageObj = new Image();
            imageObj.src = url;
            imageObj.onload = function () {
                this.canvas.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                this.canvas.ctx.drawImage(imageObj, 0, 0);
            }.bind(this);
        }
    }, {
        key: "redo",
        value: function redo() {
            if (this.undoHistory.length <= 0) return;

            var stateToLoad = this.undoHistory[this.undoHistory.length - 1];
            this.undoHistory.pop();
            this.canvas.drawHistory.push(stateToLoad);

            this.loadState(stateToLoad);
        }
    }, {
        key: "undo",
        value: function undo() {
            var history = this.canvas.drawHistory;
            var historyLength = history.length;

            if (historyLength <= 1) return;

            var stateToUndo = history[historyLength - 1];
            var stateToLoad = history[historyLength - 2];

            this.undoHistory.push(stateToUndo);
            this.canvas.drawHistory.pop();

            this.loadState(stateToLoad);
        }
    }]);

    return Undo_Redo;
}(_otherTools_class2.default);

exports.default = Undo_Redo;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map