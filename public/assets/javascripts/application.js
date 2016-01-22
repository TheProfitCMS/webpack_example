var APP =
webpackJsonpAPP([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// let log = require('./components/log');
	
	var _log = __webpack_require__(1);
	
	var _log2 = _interopRequireDefault(_log);
	
	var _polygon_class = __webpack_require__(2);
	
	var _polygon_class2 = _interopRequireDefault(_polygon_class);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// EXPORT to Global
	window.log = _log2.default;
	
	if (true) {
	  (0, _log2.default)("Hello World!");
	}
	
	// let Polygon = require('./components/polygon_class');
	
	window.Polygon = _polygon_class2.default;
	
	if (true) {
	  (0, _log2.default)(_polygon_class2.default);
	}
	
	// EXPORT to common var APP
	exports.log = _log2.default;
	exports.Polygon = _polygon_class2.default;

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Polygon = function Polygon(height, width) {
	  (0, _classCallCheck3.default)(this, Polygon);
	
	  this.height = height;
	  this.width = width;
	};
	
	// module.exports = Polygon;
	
	exports.default = Polygon;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }
]);
//# sourceMappingURL=application.js.map