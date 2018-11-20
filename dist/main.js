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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/designateStartingCell.js":
/*!**************************************!*\
  !*** ./src/designateStartingCell.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return designateStartingCell; });\n/* harmony import */ var _getSafeRandomCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSafeRandomCell */ \"./src/getSafeRandomCell.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n// pick one cell to be the starting position for the player\r\nfunction designateStartingCell(sizeX, sizeY, mapArray) {\r\n  const workingArray = mapArray;\r\n  const startingCell = Object(_getSafeRandomCell__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sizeX, sizeY, mapArray);\r\n  workingArray[startingCell.x][startingCell.y].startingCell = true;\r\n  workingArray[startingCell.x][startingCell.y].cellType = 2;\r\n  return workingArray;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/designateStartingCell.js?");

/***/ }),

/***/ "./src/drawMap.js":
/*!************************!*\
  !*** ./src/drawMap.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return drawMap; });\n/* eslint-disable linebreak-style */\r\n\r\nfunction drawMap(sizeX, sizeY, mapArray) {\r\n  const miniMap = document.querySelector('.map');\r\n  let mapString = '';\r\n  for (let i = 0; i < sizeY; i += 1) {\r\n    for (let j = 0; j < sizeX; j += 1) {\r\n      const currentCell = mapArray[j][i];\r\n      if (currentCell.x === 0) {\r\n        mapString += '<div class=\"map-row\">';\r\n      }\r\n      switch (currentCell.cellType) {\r\n        case 0:\r\n          mapString += '<div class=\"cell wall\"></div>';\r\n          break;\r\n        case 1:\r\n          mapString += '<div class=\"cell room\"></div>';\r\n          break;\r\n        case 2:\r\n          mapString += '<div class=\"cell room start\"></div>';\r\n          break;\r\n        case 3:\r\n          mapString += '<div class=\"cell room exit\"></div>';\r\n          break;\r\n        default:\r\n          mapString += '<div class=\"cell wall\"></div>';\r\n      }\r\n      if (currentCell.x === (sizeX - 1)) {\r\n        mapString += '</div>';\r\n      }\r\n    }\r\n  }\r\n  miniMap.innerHTML = mapString;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/drawMap.js?");

/***/ }),

/***/ "./src/findFarthestCellFromStart.js":
/*!******************************************!*\
  !*** ./src/findFarthestCellFromStart.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return findFarthestCellFromStart; });\n/* harmony import */ var _getLargerValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLargerValue */ \"./src/getLargerValue.js\");\n/* harmony import */ var _getStartingCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getStartingCell */ \"./src/getStartingCell.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\nfunction findFarthestCellFromStart(sizeX, sizeY, mapArray) {\r\n  const farthestCell = {};\r\n  const startingCell = Object(_getStartingCell__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mapArray);\r\n  farthestCell.xDistanceFromStart = Object(_getLargerValue__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(startingCell.x, sizeX - 1);\r\n  farthestCell.yDistanceFromStart = Object(_getLargerValue__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(startingCell.y, sizeY - 1);\r\n  if (startingCell.x > Math.floor(sizeX / 2)) {\r\n    farthestCell.x = startingCell.x - farthestCell.xDistanceFromStart;\r\n  } else {\r\n    farthestCell.x = startingCell.x + farthestCell.xDistanceFromStart - 1;\r\n  }\r\n  if (startingCell.y > Math.floor(sizeY / 2)) {\r\n    farthestCell.y = startingCell.y - farthestCell.yDistanceFromStart;\r\n  } else {\r\n    farthestCell.y = startingCell.y + farthestCell.yDistanceFromStart - 1;\r\n  }\r\n  return farthestCell;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/findFarthestCellFromStart.js?");

/***/ }),

/***/ "./src/generateBaseMapArray.js":
/*!*************************************!*\
  !*** ./src/generateBaseMapArray.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return generateBaseMapArray; });\n/* eslint-disable linebreak-style */\r\nfunction generateBaseMapArray(sizeX, sizeY) {\r\n  const mapArray = new Array(sizeY);\r\n\r\n  for (let row = 0; row < sizeY; row += 1) {\r\n    mapArray[row] = new Array(sizeX);\r\n  }\r\n\r\n  for (let i = 0; i < sizeY; i += 1) {\r\n    for (let j = 0; j < sizeX; j += 1) {\r\n      const roomObj = {};\r\n      roomObj.x = j;\r\n      roomObj.y = i;\r\n      roomObj.startingCell = false;\r\n      roomObj.cellType = 0;\r\n      roomObj.doorNorth = 0;\r\n      roomObj.doorSouth = 0;\r\n      roomObj.doorEast = 0;\r\n      roomObj.doorWest = 0;\r\n      roomObj.description = '';\r\n      mapArray[j][i] = roomObj;\r\n    }\r\n  }\r\n  return mapArray;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/generateBaseMapArray.js?");

/***/ }),

/***/ "./src/getLargerValue.js":
/*!*******************************!*\
  !*** ./src/getLargerValue.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getLargerValue; });\n/* eslint-disable linebreak-style */\r\n\r\nfunction getLargerValue(value1, value2) {\r\n  const result1 = Math.abs(value1 - value2);\r\n  const result2 = Math.abs(value1 - 0);\r\n  return Math.max(result1, result2);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/getLargerValue.js?");

/***/ }),

/***/ "./src/getSafeRandomCell.js":
/*!**********************************!*\
  !*** ./src/getSafeRandomCell.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getSafeRandomCell; });\n/* harmony import */ var _validateCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateCell */ \"./src/validateCell.js\");\n/* harmony import */ var _randomNumGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./randomNumGenerator */ \"./src/randomNumGenerator.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\nconst chooseRandomCellCoords = (sizeX, sizeY) => {\r\n  const randomCell = {};\r\n  randomCell.x = Object(_randomNumGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(0, sizeX);\r\n  randomCell.y = Object(_randomNumGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(0, sizeY);\r\n  return randomCell;\r\n};\r\n\r\nfunction getSafeRandomCell(sizeX, sizeY, mapArray) {\r\n  let candidateCell = chooseRandomCellCoords(sizeX, sizeY);\r\n  while (!Object(_validateCell__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sizeX, sizeY, candidateCell, mapArray)) {\r\n    candidateCell = chooseRandomCellCoords(sizeX, sizeY);\r\n  }\r\n  return candidateCell;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/getSafeRandomCell.js?");

/***/ }),

/***/ "./src/getStartingCell.js":
/*!********************************!*\
  !*** ./src/getStartingCell.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getStartingCell; });\n/* eslint-disable linebreak-style */\r\nfunction getStartingCell(mapArray) {\r\n  for (let i = 0; i < mapArray.length; i += 1) {\r\n    for (let j = 0; j < mapArray[i].length; j += 1) {\r\n      if (mapArray[i][j].startingCell === true) {\r\n        const startingCell = mapArray[i][j];\r\n        return startingCell;\r\n      }\r\n    }\r\n  }\r\n  return null;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/getStartingCell.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generateBaseMapArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateBaseMapArray */ \"./src/generateBaseMapArray.js\");\n/* harmony import */ var _designateStartingCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./designateStartingCell */ \"./src/designateStartingCell.js\");\n/* harmony import */ var _drawMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawMap */ \"./src/drawMap.js\");\n/* harmony import */ var _setExit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setExit */ \"./src/setExit.js\");\n/* eslint-disable linebreak-style */\r\n\r\n// generate an array of cells based on given sizes\r\n\r\n\r\n\r\n\r\n\r\nconst mapGenerator = (sizeX, sizeY) => {\r\n  let mapArray = Object(_generateBaseMapArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sizeX, sizeY);\r\n  mapArray = Object(_designateStartingCell__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sizeX, sizeY, mapArray);\r\n  mapArray = Object(_setExit__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(sizeX, sizeY, mapArray);\r\n  Object(_drawMap__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sizeX, sizeY, mapArray);\r\n};\r\n\r\nmapGenerator(15, 15);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/randomNumGenerator.js":
/*!***********************************!*\
  !*** ./src/randomNumGenerator.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return randomNumberGenerator; });\n/* eslint-disable linebreak-style */\r\nfunction randomNumberGenerator(loLimit, hiLimit) {\r\n  return Math.floor(Math.random() * (hiLimit)) + (loLimit);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/randomNumGenerator.js?");

/***/ }),

/***/ "./src/setExit.js":
/*!************************!*\
  !*** ./src/setExit.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setExit; });\n/* harmony import */ var _randomNumGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomNumGenerator */ \"./src/randomNumGenerator.js\");\n/* harmony import */ var _findFarthestCellFromStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findFarthestCellFromStart */ \"./src/findFarthestCellFromStart.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\nfunction setExit(sizeX, sizeY, mapArray) {\r\n  const exitCell = Object(_findFarthestCellFromStart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sizeX, sizeY, mapArray);\r\n  const xVariance = Object(_randomNumGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, Math.floor(sizeX / 3));\r\n  const yVariance = Object(_randomNumGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, Math.floor(sizeY / 3));\r\n  if (exitCell.x > Math.round(sizeX / 2)) {\r\n    exitCell.x -= xVariance;\r\n  } else {\r\n    exitCell.x += xVariance;\r\n  }\r\n  if (exitCell.y > Math.round(sizeY / 2)) {\r\n    exitCell.y -= yVariance;\r\n  } else {\r\n    exitCell.y += yVariance;\r\n  }\r\n  const workingArray = mapArray;\r\n  workingArray[exitCell.x][exitCell.y].cellType = 3;\r\n  return workingArray;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/setExit.js?");

/***/ }),

/***/ "./src/validateCell.js":
/*!*****************************!*\
  !*** ./src/validateCell.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validateCell; });\n/* eslint-disable linebreak-style */\r\nconst isWithinBounds = (sizeX, sizeY, cellCoords) => {\r\n  if (cellCoords.x < 0 || cellCoords.x >= sizeX) { return false; }\r\n  if (cellCoords.y < 0 || cellCoords.y >= sizeY) { return false; }\r\n  return true;\r\n};\r\n\r\nconst conflictCheck = (cellCoords, mapArray) => {\r\n  for (let i = 0; i < mapArray.length; i += 1) {\r\n    for (let j = 0; j < mapArray[i].length; j += 1) {\r\n      if (mapArray[i][j].x === cellCoords.x && mapArray[i][j].y === cellCoords.y) {\r\n        if (mapArray[i][j].cellType > 0) {\r\n          return true;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  return false;\r\n};\r\n\r\nfunction validateCell(sizeX, sizeY, cellCoords, mapArray) {\r\n  if (!isWithinBounds(sizeX, sizeY, cellCoords) || conflictCheck(cellCoords, mapArray)) {\r\n    return false;\r\n  }\r\n  return true;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/validateCell.js?");

/***/ })

/******/ });