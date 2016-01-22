webpackJsonpAPP([1],{

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	var about = {
	  init: function init() {
	    log("Hello From About");
	  }
	};
	
	module.exports = about;
	// export default about;

/***/ },

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	var orders = {
	  init: function init() {
	    log("Hello From Orders");
	  }
	};
	
	module.exports = orders;
	// export default orders;

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./about": 5,
		"./about.js": 5,
		"./log": 1,
		"./log.js": 1,
		"./orders": 6,
		"./orders.js": 6,
		"./polygon_class": 2,
		"./polygon_class.js": 2
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 8;


/***/ }

});
//# sourceMappingURL=1.js.map