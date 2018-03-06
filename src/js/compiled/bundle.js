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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
    function Tool(idElement, cursorUrl) {
        _classCallCheck(this, Tool);

        this.element = document.querySelector(idElement);
        this.cursorUrl = cursorUrl;
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


var _canvas_class = __webpack_require__(2);

var _canvas_class2 = _interopRequireDefault(_canvas_class);

var _undo_redo_class = __webpack_require__(3);

var _undo_redo_class2 = _interopRequireDefault(_undo_redo_class);

var _brush = __webpack_require__(5);

var _brush2 = _interopRequireDefault(_brush);

var _easer = __webpack_require__(6);

var _easer2 = _interopRequireDefault(_easer);

var _spray = __webpack_require__(7);

var _spray2 = _interopRequireDefault(_spray);

var _color_picker = __webpack_require__(8);

var _color_picker2 = _interopRequireDefault(_color_picker);

var _rect = __webpack_require__(9);

var _rect2 = _interopRequireDefault(_rect);

var _open_file = __webpack_require__(10);

var _open_file2 = _interopRequireDefault(_open_file);

var _download = __webpack_require__(11);

var _download2 = _interopRequireDefault(_download);

var _storage = __webpack_require__(12);

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//////////

var menu = document.querySelector(".menu"); // Class of Canvas element

var canvasElement = document.querySelector("#canvas");
var workSpaceWidth = window.innerWidth;
var workSpaceHeight = window.innerHeight - menu.offsetHeight;
var toolColor = document.querySelector("#color-field");
var toolSize = document.querySelector("#tool-size");
var download = document.querySelector("#download");
var save = document.querySelector("#save");

var redo = document.querySelector("#redo");
var undo = document.querySelector("#undo");

var toolSet = {
	"Brush": _brush2.default,
	"Easer": _easer2.default,
	"Color-Picker": _color_picker2.default,
	"Spray": _spray2.default,
	"Rect": _rect2.default

	// ///////////////


};var Sketch = new _canvas_class2.default("#canvas", workSpaceWidth, workSpaceHeight);
var DownloadImg = new _download2.default(download, document.querySelector("#canvas"));
var StorageOfCanvas = new _storage2.default(save, canvasElement, Sketch);
var Loader = new _open_file2.default("#get-file", Sketch);
var DrawHistory = new _undo_redo_class2.default("#redo", Sketch);

function disableButton(e, canvas) {
	var buttonID = document.querySelector("[data-usage=true]").id;
	var toolToDisable = toolSet[buttonID];

	toolToDisable.disableButton();
	toolToDisable.inactive(e, canvas);
}

function enableButton(e, canvas) {
	var buttonID = e.target.id;
	var toolToActive = toolSet[buttonID];

	toolToActive.enableButton();
	toolToActive.active(e, canvas);
}

function useButton(e) {
	disableButton(e, Sketch);
	enableButton(e, Sketch);
}

menu.addEventListener("click", function (e) {
	if (e.target.hasAttribute("data-usage")) {
		useButton(e);
	}
});

// /////////////////////////////////////////////////

function changeColor() {
	Sketch.changeProperties({ color: toolColor.value });
}

function changeToolSize() {
	Sketch.changeProperties({ width: toolSize.value });
}

function changeFontSize() {}

/////////

toolSize.addEventListener("change", changeToolSize);
toolColor.addEventListener("change", changeColor);

document.getElementById("get-file").addEventListener("change", function () {
	Loader.loadFile();
});

download.addEventListener('click', function () {
	return DownloadImg.downloadCanvas();
});
save.addEventListener('click', function () {
	return StorageOfCanvas.save();
});
redo.addEventListener("click", DrawHistory.redo);
undo.addEventListener("click", DrawHistory.undo);

window.addEventListener('load', function () {
	return StorageOfCanvas.load();
});

/***/ }),
/* 2 */
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
		this.canvasArea = document.querySelector(canvasElement);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _otherTools_class = __webpack_require__(4);

var _otherTools_class2 = _interopRequireDefault(_otherTools_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Undo_Redo = function (_OtherTools) {
    _inherits(Undo_Redo, _OtherTools);

    function Undo_Redo(elementID, canvasElement) {
        _classCallCheck(this, Undo_Redo);

        var _this = _possibleConstructorReturn(this, (Undo_Redo.__proto__ || Object.getPrototypeOf(Undo_Redo)).call(this, elementID, canvasElement));

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OtherTools = function OtherTools(elementID, canvasElement) {
    _classCallCheck(this, OtherTools);

    this.element = document.querySelector(elementID);
    this.canvas = canvasElement;
};

exports.default = OtherTools;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tool_class = __webpack_require__(0);

var _tool_class2 = _interopRequireDefault(_tool_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Class of tools

var Brush = new _tool_class2.default('#Brush', '../my-icons-collection/svg/001-color-picker.png');

Brush.active = function (e, canvas) {

    var paintColor = document.querySelector("[type=color]").value;
    canvas.changeProperties({ color: paintColor, drawStyle: "line" });
    canvas.bindEvents();
};

Brush.inactive = function (e, canvas) {
    canvas.unbindEvents();
};

exports.default = Brush;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tool_class = __webpack_require__(0);

var _tool_class2 = _interopRequireDefault(_tool_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Class of tools

var Easer = new _tool_class2.default('#Easer', '../my-icons-collection/svg/001-color-picker.png');

Easer.active = function (e, canvas) {

    canvas.changeProperties({ drawStyle: "line", color: "#ffffff" });
    document.querySelector("#color-field").disabled = true;
    canvas.bindEvents();
};

Easer.inactive = function (e, canvas) {
    document.querySelector("#color-field").disabled = false;
    canvas.unbindEvents();
};

exports.default = Easer;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tool_class = __webpack_require__(0);

var _tool_class2 = _interopRequireDefault(_tool_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Class of tools

var Spray = new _tool_class2.default('#Spray', '../my-icons-collection/svg/001-color-picker.png');

Spray.getRandomPosition = function (spraySize) {
    var randomAngle = Math.random() * 360;
    var randomRadius = Math.random() * spraySize;

    return {
        angle: Math.cos(randomAngle) * randomRadius,
        radius: Math.sin(randomAngle) * randomRadius
    };
};

Spray.paint = function (e, canvas) {

    var spraySize = canvas.ctx.lineWidth;
    var density = 60 * (spraySize / 5);

    for (var i = 0; i < density; i++) {

        var offset = Spray.getRandomPosition(spraySize);
        var x = offset.angle + e.offsetX;
        var y = offset.radius + e.offsetY;

        canvas.ctx.fillRect(x, y, 1, 1);
    }
};

Spray.active = function (event, canvas) {

    canvas.bindEvents();
    canvas.drawMethod = Spray.paint;
};

Spray.inactive = function (e, canvas) {

    canvas.unbindEvents();
    canvas.drawMethod = null;
};

exports.default = Spray;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tool_class = __webpack_require__(0);

var _tool_class2 = _interopRequireDefault(_tool_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Class of tools

var ColorPicker = new _tool_class2.default('#Color-Picker', '../my-icons-collection/svg/001-color-picker.png');

ColorPicker.checkColor = function (e, canvas) {

	var colorData = canvas.ctx.getImageData(e.offsetX, e.offsetY, 1, 1);

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

	console.log(hexColor);

	document.querySelector("#color-field").value = '#' + hexColor.red + hexColor.green + hexColor.blue;
};

ColorPicker.active = function (e, canvas) {

	canvas.unbindEvents();

	var canvasArea = document.querySelector("#canvas");
	ColorPicker.eventHandler; // created to make possiable to remove Event Listener

	canvasArea.addEventListener("click", ColorPicker.eventHandler = function (event) {
		ColorPicker.checkColor(event, canvas);
	});
};

ColorPicker.inactive = function (e, canvas) {
	var canvasArea = document.querySelector("#canvas");
	canvasArea.removeEventListener("click", ColorPicker.eventHandler);
};

exports.default = ColorPicker;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tool_class = __webpack_require__(0);

var _tool_class2 = _interopRequireDefault(_tool_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Class of tools

var Rect = new _tool_class2.default('#Rect', '../my-icons-collection/svg/001-color-picker.png');

console.log(Rect);

Rect.startDrawPoints = function (event, canvas) {
    var menuHeight = window.innerHeight - canvas.canvasArea.height;

    return {
        y: event.clientY - menuHeight,
        x: event.clientX,
        menuHeight: menuHeight
    };
};

Rect.active = function (e, test) {
    var canvas = test;
    canvas.unbindEvents();

    console.log(canvas);
    var canvasArea = document.querySelector("#canvas");
    Rect.eventHandler; // created to make possiable to remove Event Listener

    canvasArea.addEventListener("mousedown", function (event) {

        canvas.ctx.clearRect(0, 0, 50, 50);
        var startPoint = Rect.startDrawPoints(event, canvas);
        console.log(startPoint);
        canvasArea.addEventListener("mousemove", function (e) {
            canvas.ctx.rect(startPoint.x, startPoint.y, e.clientX - startPoint.x, e.clientY - startPoint.y - startPoint.menuHeight);
            canvas.ctx.stroke();
            console.log(e);
        });
    });
};

Rect.inactive = function (e, canvas) {};

exports.default = Rect;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OpenFile = function () {
    function OpenFile(elementID, canvasElement) {
        _classCallCheck(this, OpenFile);

        this.element = document.querySelector(elementID);
        this.canvas = canvasElement;
    }

    _createClass(OpenFile, [{
        key: "checkSizeImage",
        value: function checkSizeImage(image) {
            var canvasHeight = this.canvas.canvasArea.clientHeight;
            var canvasWidth = this.canvas.canvasArea.clientWidth;
            var imageWidth = image.width;
            var imageHeight = image.height;

            console.log(canvasHeight, imageHeight);

            if (imageWidth > canvasWidth || imageHeight > canvasHeight) {
                var widthRatio = canvasWidth / imageWidth;
                var heightRatio = canvasHeight / imageHeight;

                var toatlSizeRatio = Math.min(widthRatio, heightRatio); //it always will be fraction, smaller fraction will show longer side of image;
                //to properly scale, it have be scaled by ratio of longer side

                return {
                    x: imageWidth * toatlSizeRatio,
                    y: imageHeight * toatlSizeRatio
                };
            }
        }
    }, {
        key: "loadFile",
        value: function loadFile() {
            var file = this.element.files[0];
            var imageObj = new Image();
            var reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = function () {
                imageObj.src = reader.result;
            };

            imageObj.onload = function () {
                var imageSize = this.checkSizeImage(imageObj);
                this.canvas.ctx.drawImage(imageObj, 0, 0, imageSize.x, imageSize.y);
            }.bind(this);
        }
    }]);

    return OpenFile;
}();

exports.default = OpenFile;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DownloadCanvas = function () {
    function DownloadCanvas(element, canvasElement) {
        _classCallCheck(this, DownloadCanvas);

        this.fileName = "my_image.png";
        this.canvas = canvasElement;
        this.element = element;
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
}();

exports.default = DownloadCanvas;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasStorage = function () {
    function CanvasStorage(element, canvasElement, canvas) {
        _classCallCheck(this, CanvasStorage);

        this.canvasElement = canvasElement;
        this.canvas = canvas;
        this.element = element;
    }

    _createClass(CanvasStorage, [{
        key: "save",
        value: function save() {
            var link = this.canvasElement.toDataURL();

            localStorage.setItem("img", link);
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
}();

exports.default = CanvasStorage;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map