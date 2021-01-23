/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/plus.svg":
/*!**************************!*\
  !*** ./src/img/plus.svg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d9a15ea47f3f1e3d7f211da5b2a3f661.svg\");\n\n//# sourceURL=webpack://ex_webpack5/./src/img/plus.svg?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBoard\": () => /* binding */ createBoard\n/* harmony export */ });\n/* harmony import */ var _img_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/plus.svg */ \"./src/img/plus.svg\");\n\r\n\r\nconst createBoard = function() {\r\n\r\n    const wrap = document.createElement('div');\r\n    wrap.classList.add('wrap');\r\n\r\n    const stepTodo = document.createElement('div');\r\n    stepTodo.classList.add('step');\r\n    stepTodo.classList.add('todo');\r\n    stepTodo.innerHTML = `<button class=\"add-task\" draggable=\"false\"><img src=\"${_img_plus_svg__WEBPACK_IMPORTED_MODULE_0__.default}\"></button>`;\r\n    \r\n    const stepInProgress = document.createElement('div');\r\n    stepInProgress.classList.add('step');\r\n    stepInProgress.classList.add('in-progress');\r\n\r\n    const stepDone = document.createElement('div');\r\n    stepDone.classList.add('step');\r\n    stepDone.classList.add('done');\r\n\r\n    wrap.append(stepTodo, stepInProgress, stepDone);\r\n\r\n    return wrap;\r\n}\n\n//# sourceURL=webpack://ex_webpack5/./src/board.js?");

/***/ }),

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCard\": () => /* binding */ createCard,\n/* harmony export */   \"moveCard\": () => /* binding */ moveCard\n/* harmony export */ });\nconst createCard = function() {\r\n    let todoCard = document.createElement('div');\r\n    todoCard.classList.add('card');\r\n    todoCard.setAttribute('draggable', 'true');\r\n    document.querySelector('.todo').appendChild(todoCard);\r\n}\r\n\r\nconst moveCard = function() {\r\n    let card = document.createElement('div');\r\n    card.classList.add('card');\r\n    card.setAttribute('draggable', 'true');\r\n    return card;\r\n}\n\n//# sourceURL=webpack://ex_webpack5/./src/card.js?");

/***/ }),

/***/ "./src/drag-n-drop.js":
/*!****************************!*\
  !*** ./src/drag-n-drop.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dragStart\": () => /* binding */ dragStart,\n/* harmony export */   \"dragEnd\": () => /* binding */ dragEnd,\n/* harmony export */   \"dragOver\": () => /* binding */ dragOver,\n/* harmony export */   \"dragEnter\": () => /* binding */ dragEnter,\n/* harmony export */   \"dragLeave\": () => /* binding */ dragLeave\n/* harmony export */ });\nconst dragStart = function() {\r\n    setTimeout(() => {\r\n        this.classList.add('hide')\r\n    }, 0);\r\n}\r\n\r\nconst dragEnd = function() {\r\n        this.classList.remove('hide');\r\n}\r\n\r\nconst dragOver = function(e) {\r\n    e.preventDefault();\r\n}\r\n\r\nconst dragEnter = function() {\r\n    this.classList.add('hovered');\r\n}\r\n\r\nconst dragLeave = function() {\r\n    this.classList.remove('hovered');\r\n}\r\n\r\n/* export const dragDrop = function(el) {\r\n    this.append(el);\r\n} */\r\n\n\n//# sourceURL=webpack://ex_webpack5/./src/drag-n-drop.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ \"./src/card.js\");\n/* harmony import */ var _drag_n_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-n-drop */ \"./src/drag-n-drop.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction root() {\r\n  const root = document.getElementById('root');\r\n  root.append((0,_board__WEBPACK_IMPORTED_MODULE_0__.createBoard)());\r\n};\r\n\r\n\r\n\r\nroot();\r\n//createCard();\r\n//createCard();\r\n\r\n\r\nlet cards = document.querySelectorAll('.card');\r\nlet steps = document.querySelectorAll('.step');\r\n\r\nconst addTask = document.querySelector('.add-task');\r\naddTask.addEventListener('click', _card__WEBPACK_IMPORTED_MODULE_1__.createCard);\r\n\r\ncards.forEach((e) => e.addEventListener('dragstart', _drag_n_drop__WEBPACK_IMPORTED_MODULE_2__.dragStart)); \r\ncards.forEach((e) => e.addEventListener('dragend', _drag_n_drop__WEBPACK_IMPORTED_MODULE_2__.dragEnd)); \r\nsteps.forEach((e) => e.addEventListener('dragover', _drag_n_drop__WEBPACK_IMPORTED_MODULE_2__.dragOver)); \r\nsteps.forEach((e) => e.addEventListener('dragenter', _drag_n_drop__WEBPACK_IMPORTED_MODULE_2__.dragEnter)); \r\nsteps.forEach((e) => e.addEventListener('dragleave', _drag_n_drop__WEBPACK_IMPORTED_MODULE_2__.dragLeave)); \r\nsteps.forEach((e) => e.addEventListener('drop', function() {\r\n  this.append((0,_card__WEBPACK_IMPORTED_MODULE_1__.moveCard)());\r\n})); \n\n//# sourceURL=webpack://ex_webpack5/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;