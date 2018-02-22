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
        this.events();
    }

    // disableButton() {
    //     let activeElement = document.querySelector(".menu__button--active");
    //     if(!activeElement) return;

    //     activeElement.classList.remove("menu__button--active");
    // }

    _createClass(Tool, [{
        key: "activeButton",
        value: function activeButton() {
            this.element.classList.add("menu__button--active"); // set button to active
            document.querySelector(":root").style.setProperty("--canvas-cursor", "url(" + this.cursorUrl + "), auto"); // change cursor
        }
    }, {
        key: "events",
        value: function events() {
            this.element.addEventListener("click", function () {
                // this.disableButton();
                this.activeButton();
            }.bind(this));
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

var _brush = __webpack_require__(3);

var _brush2 = _interopRequireDefault(_brush);

var _easer = __webpack_require__(4);

var _easer2 = _interopRequireDefault(_easer);

var _spray = __webpack_require__(5);

var _spray2 = _interopRequireDefault(_spray);

var _color_picker = __webpack_require__(6);

var _color_picker2 = _interopRequireDefault(_color_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Class of Canvas element

var menu = document.querySelector(".menu");
var canvas = document.querySelector("#canvas");
var workSpaceWidth = window.innerWidth;
var workSpaceHeight = window.innerHeight - menu.offsetHeight;
var toolColor = document.querySelector("#color-field");
var toolSize = document.querySelector("#tool-size");

var toolSet = {
	"Brush": _brush2.default,
	"Easer": _easer2.default,
	"Color-Picker": _color_picker2.default,
	"Spray": _spray2.default
};

var Sketch = new _canvas_class2.default("#canvas", workSpaceWidth, workSpaceHeight);

function inactiveButton(nodeList) {
	Array.prototype.forEach.call(nodeList, function (element) {
		element.dataset.usage = "false";
		element.classList.remove("menu__button--active");
		canvas.removeEventListener("click", toolSet[element.id].use);
	});
}

function changeColor() {
	Sketch.changeProperties({ color: toolColor.value });
}

function changeToolSize() {
	Sketch.changeProperties({ width: toolSize.value });
}

function changeFontSize() {}

menu.addEventListener("click", function (e) {

	var elementToUse = e.target;
	var elementUsage = elementToUse.dataset.usage;

	if (elementUsage === "true") return;

	inactiveButton(document.querySelectorAll("[data-usage=true]"));

	elementToUse.dataset.usage = "true";
	toolSet[elementToUse.id].use(e, Sketch);
});

toolSize.addEventListener("change", changeToolSize);
toolColor.addEventListener("change", changeColor);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
	function Canvas(canvasElement, width, height) {
		_classCallCheck(this, Canvas);

		// creating canvas object, needed arguments (1. selector of canvas element, 2. width, 3. height)
		this.canvasArea = document.querySelector(canvasElement);
		this.canvasArea.width = width;
		this.canvasArea.height = height;
		this.ctx = this.canvasArea.getContext('2d');
		this.isDrawing = false;
		this.lastX = 0;
		this.lastY = 0;
		this.drawProperties = {
			drawStyle: "line",
			color: '#cccccc',
			width: '10',
			style: 'round',
			rect: null
		};
		this._initEvents(this.drawProperties.drawStyle);
	}

	_createClass(Canvas, [{
		key: 'changeProperties',
		value: function changeProperties(properties) {
			// Function to change drawing properies: color, width, OBJECT AS ARGUMENT OF FUNCTION
			this.drawProperties = _extends({}, this.drawProperties, properties);
		}
	}, {
		key: '_draw',
		value: function _draw(e) {
			if (!this.isDrawing) return;

			this.ctx.strokeStyle = this.drawProperties.color;
			this.ctx.lineJoin = 'round';
			this.ctx.lineCap = this.drawProperties.style;
			this.ctx.lineWidth = this.drawProperties.width;

			this.ctx.beginPath();

			if (this.drawProperties.drawStyle === "line") {
				this.ctx.moveTo(this.lastX, this.lastY);
				this.ctx.lineTo(e.offsetX, e.offsetY);
			} else if (this.drawProperties.drawStyle === "rect") {
				var _ctx;

				(_ctx = this.ctx).fillRect.apply(_ctx, _toConsumableArray(this.drawProperties.rect(e)));
			}

			this.ctx.stroke();
			this.lastX = e.offsetX;
			this.lastY = e.offsetY;
		}
	}, {
		key: '_initEvents',
		value: function _initEvents(action) {
			var _this = this;

			if (action === "pickColor") return;

			this.canvasArea.addEventListener("mousemove", function (e) {
				_this._draw(e);
			});
			this.canvasArea.addEventListener("mousedown", function (e) {
				_this.isDrawing = true;
				_this.lastX = e.offsetX;
				_this.lastY = e.offsetY;
				_this._draw(e);
			});
			this.canvasArea.addEventListener("mouseup", function () {
				return _this.isDrawing = false;
			});
			this.canvasArea.addEventListener("mouseout", function () {
				return _this.isDrawing = false;
			});
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

var _tool_class = __webpack_require__(0);

var _tool_class2 = _interopRequireDefault(_tool_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Class of tools

var Brush = new _tool_class2.default('#Brush', '../my-icons-collection/svg/001-color-picker.png');

Brush.use = function (e, canvas) {
    var paintColor = document.querySelector("[type=color]").value;
    canvas.changeProperties({ color: paintColor, drawStyle: "line" });
    document.querySelector("#color-field").disabled = false;
};

exports.default = Brush;

/***/ }),
/* 4 */
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

Easer.use = function (e, canvas) {
    canvas.changeProperties({ drawStyle: "line", color: "#ffffff" });
    document.querySelector("#color-field").disabled = true;
};

exports.default = Easer;

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

var Spray = new _tool_class2.default('#Brush', '../my-icons-collection/svg/001-color-picker.png');

Spray.getRandomPosition = function (paintWidth) {
    var randomAngle = Math.random() * 360;
    var randomRadius = Math.random() * paintWidth;

    return {
        angle: Math.cos(randomAngle) * randomRadius,
        radius: Math.sin(randomAngle) * randomRadius
    };
};

Spray.paint = function (e, paintWidth) {

    for (var i = 0; i < 50; i++) {
        var offset = Spray.getRandomPosition(paintWidth);
        var x = e.offsetX + offset.angle,
            y = e.offsetY + offset.radius;

        // const pleceToDraw = [x, y, 1, 1];
        return [x, y, 1, 1];

        // Sketch.changeProperties({drawStyle: "rect", rect: pleceToDraw});
    }
};

Spray.use = function (e, canvasCtx, paintWidth) {

    canvasCtx.changeProperties({ drawStyle: "rect", rect: function rect(e, paintWidth) {
            Spray.paint(e, paintWidth);
        } });
    // setInterval(this.paint(e, Sketch, paintWidth), 16);
};

exports.default = Spray;

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

var ColorPicker = new _tool_class2.default('#Color-Picker', '../my-icons-collection/svg/001-color-picker.png');

ColorPicker.use = function (e, canvas) {

	canvas.changeProperties({ drawStyle: "pickColor" });
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

	document.querySelector("#color-field").value = '#' + hexColor.red + hexColor.green + hexColor.blue;
};

exports.default = ColorPicker;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map