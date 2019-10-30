(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Base64Size.ts":
/*!***************************!*\
  !*** ./src/Base64Size.ts ***!
  \***************************/
/*! exports provided: base64Size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"base64Size\", function() { return base64Size; });\n\r\nfunction base64Size({ value, unit }) {\r\n    let size = value.length * (3 / 4);\r\n    if (unit === 'kilobytes') {\r\n        size = size / 1024;\r\n    }\r\n    ;\r\n    return size;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Base64Size.ts?");

/***/ }),

/***/ "./src/CamelToDash.ts":
/*!****************************!*\
  !*** ./src/CamelToDash.ts ***!
  \****************************/
/*! exports provided: camelToDash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camelToDash\", function() { return camelToDash; });\n\r\nfunction camelToDash(camel) {\r\n    let dash = '';\r\n    for (let character of camel) {\r\n        if (character === character.toUpperCase()) {\r\n            dash += '-' + character.toLowerCase();\r\n        }\r\n        else {\r\n            dash += character;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    return dash;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/CamelToDash.ts?");

/***/ }),

/***/ "./src/Capitalise.ts":
/*!***************************!*\
  !*** ./src/Capitalise.ts ***!
  \***************************/
/*! exports provided: capitalise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"capitalise\", function() { return capitalise; });\n\r\nfunction capitalise(text) {\r\n    const words = text.split(' ');\r\n    const capitalisedWords = [];\r\n    for (let word of words) {\r\n        const capitalisedWord = (word[0] || '').toUpperCase() + word.slice(1);\r\n        capitalisedWords.push(capitalisedWord);\r\n    }\r\n    ;\r\n    const capitalised = capitalisedWords.join(' ');\r\n    return capitalised;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Capitalise.ts?");

/***/ }),

/***/ "./src/CreateSubsetObject.ts":
/*!***********************************!*\
  !*** ./src/CreateSubsetObject.ts ***!
  \***********************************/
/*! exports provided: createSubsetObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSubsetObject\", function() { return createSubsetObject; });\n\r\nfunction createSubsetObject(source, keys, exclude) {\r\n    const subset = {};\r\n    if (exclude) {\r\n        for (let { 0: key, 1: value } of Object.entries(source)) {\r\n            if (keys.includes(key))\r\n                continue;\r\n            subset[key] = value;\r\n        }\r\n        ;\r\n    }\r\n    else {\r\n        for (let key of keys) {\r\n            if (key in source) {\r\n                subset[key] = source[key];\r\n            }\r\n            ;\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    return subset;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/CreateSubsetObject.ts?");

/***/ }),

/***/ "./src/Delay.ts":
/*!**********************!*\
  !*** ./src/Delay.ts ***!
  \**********************/
/*! exports provided: delay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delay\", function() { return delay; });\n\r\nfunction delay(milliseconds) {\r\n    const promise = new Promise(resolve => setTimeout(resolve, milliseconds));\r\n    return promise;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Delay.ts?");

/***/ }),

/***/ "./src/GenerateSort.ts":
/*!*****************************!*\
  !*** ./src/GenerateSort.ts ***!
  \*****************************/
/*! exports provided: generateSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateSort\", function() { return generateSort; });\n\r\nfunction generateSort(itemCallback, order = 'ascending') {\r\n    const greaterThan = order === 'ascending' ? 1 : -1;\r\n    const lessThan = order === 'ascending' ? -1 : 1;\r\n    const sort = (alpha, bravo) => {\r\n        if (itemCallback(alpha) > itemCallback(bravo))\r\n            return greaterThan;\r\n        else if (itemCallback(alpha) < itemCallback(bravo))\r\n            return lessThan;\r\n        else\r\n            return 0;\r\n    };\r\n    return sort;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/GenerateSort.ts?");

/***/ }),

/***/ "./src/Mirror.ts":
/*!***********************!*\
  !*** ./src/Mirror.ts ***!
  \***********************/
/*! exports provided: mirror */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mirror\", function() { return mirror; });\n\r\n;\r\nfunction mirror(object) {\r\n    const mirror = {};\r\n    const keys = Object.keys(object);\r\n    for (let key of keys) {\r\n        mirror[key] = key;\r\n    }\r\n    ;\r\n    return mirror;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/Mirror.ts?");

/***/ }),

/***/ "./src/PromiseController.ts":
/*!**********************************!*\
  !*** ./src/PromiseController.ts ***!
  \**********************************/
/*! exports provided: PromiseController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PromiseController\", function() { return PromiseController; });\n\r\nclass PromiseController {\r\n    constructor() {\r\n        this.promise = new Promise((resolve, reject) => {\r\n            this.resolve = resolve;\r\n            this.reject = reject;\r\n        });\r\n    }\r\n    ;\r\n    resolve(value) {\r\n        this._resolve(value);\r\n    }\r\n    ;\r\n    reject(reason) {\r\n        this._reject(reason);\r\n    }\r\n    ;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/PromiseController.ts?");

/***/ }),

/***/ "./src/ResolvePromises.ts":
/*!********************************!*\
  !*** ./src/ResolvePromises.ts ***!
  \********************************/
/*! exports provided: resolvePromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolvePromises\", function() { return resolvePromises; });\n\r\nasync function resolvePromises(object) {\r\n    const keys = Object.keys(object);\r\n    const promises = [];\r\n    const resolutions = {};\r\n    for (let key of keys) {\r\n        const promise = object[key];\r\n        const resolutionPromise = resolvePromise({ key, promise, resolutions });\r\n        promises.push(resolutionPromise);\r\n    }\r\n    ;\r\n    await Promise.all(promises);\r\n    return resolutions;\r\n}\r\n;\r\nasync function resolvePromise({ key, promise, resolutions }) {\r\n    const resolution = await promise;\r\n    resolutions[key] = resolution;\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/ResolvePromises.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: mirror, createSubsetObject, resolvePromises, generateSort, delay, base64Size, capitalise, camelToDash, PromiseController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Mirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mirror */ \"./src/Mirror.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mirror\", function() { return _Mirror__WEBPACK_IMPORTED_MODULE_0__[\"mirror\"]; });\n\n/* harmony import */ var _CreateSubsetObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateSubsetObject */ \"./src/CreateSubsetObject.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createSubsetObject\", function() { return _CreateSubsetObject__WEBPACK_IMPORTED_MODULE_1__[\"createSubsetObject\"]; });\n\n/* harmony import */ var _ResolvePromises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResolvePromises */ \"./src/ResolvePromises.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"resolvePromises\", function() { return _ResolvePromises__WEBPACK_IMPORTED_MODULE_2__[\"resolvePromises\"]; });\n\n/* harmony import */ var _GenerateSort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GenerateSort */ \"./src/GenerateSort.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"generateSort\", function() { return _GenerateSort__WEBPACK_IMPORTED_MODULE_3__[\"generateSort\"]; });\n\n/* harmony import */ var _Delay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Delay */ \"./src/Delay.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"delay\", function() { return _Delay__WEBPACK_IMPORTED_MODULE_4__[\"delay\"]; });\n\n/* harmony import */ var _Base64Size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Base64Size */ \"./src/Base64Size.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"base64Size\", function() { return _Base64Size__WEBPACK_IMPORTED_MODULE_5__[\"base64Size\"]; });\n\n/* harmony import */ var _Capitalise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Capitalise */ \"./src/Capitalise.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"capitalise\", function() { return _Capitalise__WEBPACK_IMPORTED_MODULE_6__[\"capitalise\"]; });\n\n/* harmony import */ var _CamelToDash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CamelToDash */ \"./src/CamelToDash.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"camelToDash\", function() { return _CamelToDash__WEBPACK_IMPORTED_MODULE_7__[\"camelToDash\"]; });\n\n/* harmony import */ var _PromiseController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PromiseController */ \"./src/PromiseController.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PromiseController\", function() { return _PromiseController__WEBPACK_IMPORTED_MODULE_8__[\"PromiseController\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });
});