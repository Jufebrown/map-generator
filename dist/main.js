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

/***/ "./src/assignDoor.js":
/*!***************************!*\
  !*** ./src/assignDoor.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return assignDoor; });\n/* harmony import */ var _getNeighborCellCoords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNeighborCellCoords */ \"./src/getNeighborCellCoords.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\nfunction assignDoor(currentCell, direction, mapArray) {\r\n  const workingArray = mapArray;\r\n  const cellOnOtherSideOfDoor = Object(_getNeighborCellCoords__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(currentCell, direction);\r\n  switch (direction) {\r\n    case 'north':\r\n      workingArray[currentCell.x][currentCell.y].doors[0] = 1;\r\n      workingArray[cellOnOtherSideOfDoor.x][cellOnOtherSideOfDoor.y].doors[1] = 1;\r\n      workingArray[cellOnOtherSideOfDoor.x][cellOnOtherSideOfDoor.y].cellType = 1;\r\n      break;\r\n\r\n    case 'south':\r\n      workingArray[currentCell.x][currentCell.y].doors[1] = 1;\r\n      workingArray[cellOnOtherSideOfDoor.x][cellOnOtherSideOfDoor.y].doors[0] = 1;\r\n      workingArray[cellOnOtherSideOfDoor.x][cellOnOtherSideOfDoor.y].cellType = 1;\r\n      break;\r\n\r\n    case 'east':\r\n      workingArray[currentCell.x][currentCell.y].doors[2] = 1;\r\n      workingArray[cellOnOtherSideOfDoor.x][cellOnOtherSideOfDoor.y].doors[3] = 1;\r\n      workingArray[cellOnOtherSideOfDoor.x][cellOnOtherSideOfDoor.y].cellType = 1;\r\n      break;\r\n\r\n    case 'west':\r\n      workingArray[currentCell.x][currentCell.y].doors[3] = 1;\r\n      workingArray[cellOnOtherSideOfDoor.x][cellOnOtherSideOfDoor.y].doors[2] = 1;\r\n      workingArray[cellOnOtherSideOfDoor.x][cellOnOtherSideOfDoor.y].cellType = 1;\r\n      break;\r\n\r\n    default:\r\n      break;\r\n  }\r\n  return workingArray;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/assignDoor.js?");

/***/ }),

/***/ "./src/conflictCheck.js":
/*!******************************!*\
  !*** ./src/conflictCheck.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return conflictCheck; });\n/* eslint-disable linebreak-style */\r\nfunction conflictCheck(cellCoords, mapArray) {\r\n  for (let i = 0; i < mapArray.length; i += 1) {\r\n    for (let j = 0; j < mapArray[i].length; j += 1) {\r\n      if (mapArray[i][j].x === cellCoords.x && mapArray[i][j].y === cellCoords.y) {\r\n        if (mapArray[i][j].cellType > 0) {\r\n          return true;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  return false;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/conflictCheck.js?");

/***/ }),

/***/ "./src/distributeSetPieces.js":
/*!************************************!*\
  !*** ./src/distributeSetPieces.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return distributeSetPieces; });\n/* harmony import */ var _setPieces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPieces */ \"./src/setPieces.js\");\n/* harmony import */ var _getSafeRandomCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSafeRandomCell */ \"./src/getSafeRandomCell.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\nfunction distributeSetPieces(sizeX, sizeY, mapArray) {\r\n  const workingArray = mapArray;\r\n  for (let i = 0; i < _setPieces__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\r\n    const setPiece = _setPieces__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i];\r\n    let setPieceCell = {};\r\n    setPieceCell = Object(_getSafeRandomCell__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sizeX, sizeY, mapArray);\r\n    workingArray[setPieceCell.x][setPieceCell.y].cellType = setPiece.cellType;\r\n    workingArray[setPieceCell.x][setPieceCell.y].description = setPiece.description;\r\n  }\r\n  return workingArray;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/distributeSetPieces.js?");

/***/ }),

/***/ "./src/drawMap.js":
/*!************************!*\
  !*** ./src/drawMap.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return drawMap; });\n/* eslint-disable linebreak-style */\r\n\r\nfunction drawMap(sizeX, sizeY, mapArray) {\r\n  const miniMap = document.querySelector('.map');\r\n  let mapString = '';\r\n  for (let i = 0; i < sizeY; i += 1) {\r\n    for (let j = 0; j < sizeX; j += 1) {\r\n      const currentCell = mapArray[j][i];\r\n      if (currentCell.x === 0) {\r\n        mapString += '<div class=\"map-row\">';\r\n      }\r\n      switch (currentCell.cellType) {\r\n        case 0:\r\n          mapString += '<div class=\"cell wall\"></div>';\r\n          break;\r\n\r\n        case 1:\r\n          mapString += '<div class=\"cell room\"></div>';\r\n          break;\r\n\r\n        case 2:\r\n          mapString += '<div class=\"cell room start\"></div>';\r\n          break;\r\n\r\n        case 3:\r\n          mapString += '<div class=\"cell room exit\"></div>';\r\n          break;\r\n\r\n        case 4:\r\n          mapString += '<div class=\"cell room\"></div>';\r\n          break;\r\n\r\n        default:\r\n          break;\r\n      }\r\n      if (currentCell.x === (sizeX - 1)) {\r\n        mapString += '</div>';\r\n      }\r\n    }\r\n  }\r\n  miniMap.innerHTML = mapString;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/drawMap.js?");

/***/ }),

/***/ "./src/generateBaseMapArray.js":
/*!*************************************!*\
  !*** ./src/generateBaseMapArray.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return generateBaseMapArray; });\n/* eslint-disable linebreak-style */\r\nfunction generateBaseMapArray(sizeX, sizeY) {\r\n  const mapArray = new Array(sizeY);\r\n\r\n  for (let row = 0; row < sizeY; row += 1) {\r\n    mapArray[row] = new Array(sizeX);\r\n  }\r\n\r\n  for (let i = 0; i < sizeY; i += 1) {\r\n    for (let j = 0; j < sizeX; j += 1) {\r\n      const roomObj = {};\r\n      roomObj.x = j;\r\n      roomObj.y = i;\r\n      roomObj.cellType = 0;\r\n      roomObj.doors = [0, 0, 0, 0];\r\n      roomObj.description = '';\r\n      mapArray[j][i] = roomObj;\r\n    }\r\n  }\r\n  return mapArray;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/generateBaseMapArray.js?");

/***/ }),

/***/ "./src/getAllSetPieces.js":
/*!********************************!*\
  !*** ./src/getAllSetPieces.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getAllSetPieces; });\n/* eslint-disable linebreak-style */\r\nfunction getAllSetPieces(mapArray) {\r\n  const setPieceArray = [];\r\n\r\n  mapArray.forEach((cell) => {\r\n    if (cell.cellType > 1) {\r\n      setPieceArray.push(cell);\r\n    }\r\n  });\r\n  return setPieceArray;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/getAllSetPieces.js?");

/***/ }),

/***/ "./src/getDisplacementBetweenCells.js":
/*!********************************************!*\
  !*** ./src/getDisplacementBetweenCells.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getDisplacementBetweenCells; });\n/* eslint-disable linebreak-style */\r\nconst difference = (value1, value2) => value1 - value2;\r\n\r\nfunction getDisplacementBetweenCells(cell1, cell2) {\r\n  const displacement = {\r\n    x: difference(cell1.x, cell2.x),\r\n    y: difference(cell1.y, cell2.y),\r\n  };\r\n  return displacement;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/getDisplacementBetweenCells.js?");

/***/ }),

/***/ "./src/getNeighborCellCoords.js":
/*!**************************************!*\
  !*** ./src/getNeighborCellCoords.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getNeighborCellCoords; });\n/* eslint-disable linebreak-style */\r\nfunction getNeighborCellCoords(currentCell, direction) {\r\n  const neighborCell = {\r\n    x: currentCell.x,\r\n    y: currentCell.y,\r\n  };\r\n\r\n  switch (direction) {\r\n    case 'north':\r\n      neighborCell.y += 1;\r\n      break;\r\n\r\n    case 'south':\r\n      neighborCell.y -= 1;\r\n      break;\r\n\r\n    case 'east':\r\n      neighborCell.x += 1;\r\n      break;\r\n\r\n    case 'west':\r\n      neighborCell.x -= 1;\r\n      break;\r\n\r\n    default:\r\n      break;\r\n  }\r\n  return neighborCell;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/getNeighborCellCoords.js?");

/***/ }),

/***/ "./src/getSafeRandomCell.js":
/*!**********************************!*\
  !*** ./src/getSafeRandomCell.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getSafeRandomCell; });\n/* harmony import */ var _validCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validCell */ \"./src/validCell.js\");\n/* harmony import */ var _randomNumGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./randomNumGenerator */ \"./src/randomNumGenerator.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\nconst chooseRandomCellCoords = (sizeX, sizeY) => {\r\n  const randomCell = {};\r\n  randomCell.x = Object(_randomNumGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(0, sizeX);\r\n  randomCell.y = Object(_randomNumGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(0, sizeY);\r\n  return randomCell;\r\n};\r\n\r\nfunction getSafeRandomCell(sizeX, sizeY, mapArray) {\r\n  let candidateCell = chooseRandomCellCoords(sizeX, sizeY);\r\n  while (!Object(_validCell__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sizeX, sizeY, candidateCell, mapArray)) {\r\n    candidateCell = chooseRandomCellCoords(sizeX, sizeY);\r\n  }\r\n  return candidateCell;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/getSafeRandomCell.js?");

/***/ }),

/***/ "./src/getSpecificSetPiece.js":
/*!************************************!*\
  !*** ./src/getSpecificSetPiece.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getSpecificSetPiece; });\n/* eslint-disable linebreak-style */\r\nfunction getSpecificSetPiece(mapArray, cellType) {\r\n  for (let i = 0; i < mapArray.length; i += 1) {\r\n    for (let j = 0; j < mapArray[i].length; j += 1) {\r\n      if (mapArray[i][j].cellType === cellType) {\r\n        const searchCell = mapArray[i][j];\r\n        return searchCell;\r\n      }\r\n    }\r\n  }\r\n  return null;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/getSpecificSetPiece.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mapGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapGenerator */ \"./src/mapGenerator.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\nObject(_mapGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(20, 20);\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/isWithinBounds.js":
/*!*******************************!*\
  !*** ./src/isWithinBounds.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isWithinBounds; });\n/* eslint-disable linebreak-style */\r\nfunction isWithinBounds(sizeX, sizeY, cellCoords) {\r\n  if (cellCoords.x < 0 || cellCoords.x >= sizeX) { return false; }\r\n  if (cellCoords.y < 0 || cellCoords.y >= sizeY) { return false; }\r\n  return true;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/isWithinBounds.js?");

/***/ }),

/***/ "./src/makePaths.js":
/*!**************************!*\
  !*** ./src/makePaths.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makePaths; });\n/* harmony import */ var _randomNumGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomNumGenerator */ \"./src/randomNumGenerator.js\");\n/* harmony import */ var _validCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validCell */ \"./src/validCell.js\");\n/* harmony import */ var _getNeighborCellCoords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getNeighborCellCoords */ \"./src/getNeighborCellCoords.js\");\n/* harmony import */ var _assignDoor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignDoor */ \"./src/assignDoor.js\");\n/* harmony import */ var _getDisplacementBetweenCells__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getDisplacementBetweenCells */ \"./src/getDisplacementBetweenCells.js\");\n/* harmony import */ var _getSpecificSetPiece__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getSpecificSetPiece */ \"./src/getSpecificSetPiece.js\");\n/* harmony import */ var _getAllSetPieces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getAllSetPieces */ \"./src/getAllSetPieces.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst chooseAxis = () => {\r\n  const axes = ['x', 'y'];\r\n  const axis = axes[Object(_randomNumGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, 2)];\r\n  return axis;\r\n};\r\n\r\nfunction makePaths(sizeX, sizeY, mapArray) {\r\n  const directions = ['north', 'south', 'east', 'west'];\r\n  const direction = directions[Object(_randomNumGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, 4)];\r\n  let workingArray = mapArray;\r\n  let axisOfMovement;\r\n  const displacementArray = [];\r\n\r\n  const exit = Object(_getSpecificSetPiece__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(mapArray, 3);\r\n  const setPieceArray = Object(_getAllSetPieces__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(mapArray);\r\n  let currentCell = exit;\r\n  let nextCell = Object(_getNeighborCellCoords__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(currentCell, direction);\r\n\r\n  // loop through setpieces\r\n  setPieceArray.array.forEach((setPiece) => {\r\n    // get displacement between exit and each setpiece\r\n    const displacement = Object(_getDisplacementBetweenCells__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(exit, setPiece);\r\n    // choose the starting axis of direction to move on to make path\r\n    if (displacement.x !== 0 && displacement.y !== 0) {\r\n      axisOfMovement = chooseAxis();\r\n    } else if (displacement.x === 0 && displacement.y !== 0) {\r\n      axisOfMovement = 'y';\r\n    } else if (displacement.x !== 0 && displacement.y === 0) {\r\n      axisOfMovement = 'x';\r\n    } else {\r\n      axisOfMovement = null;\r\n    }\r\n  });\r\n\r\n  if (Object(_validCell__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sizeX, sizeY, nextCell, workingArray)) {\r\n    workingArray = Object(_assignDoor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(currentCell, direction, mapArray);\r\n    currentCell = nextCell;\r\n    nextCell = Object(_getNeighborCellCoords__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(currentCell, direction);\r\n  }\r\n  return workingArray;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/makePaths.js?");

/***/ }),

/***/ "./src/mapGenerator.js":
/*!*****************************!*\
  !*** ./src/mapGenerator.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mapGenerator; });\n/* harmony import */ var _generateBaseMapArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateBaseMapArray */ \"./src/generateBaseMapArray.js\");\n/* harmony import */ var _drawMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawMap */ \"./src/drawMap.js\");\n/* harmony import */ var _distributeSetPieces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distributeSetPieces */ \"./src/distributeSetPieces.js\");\n/* harmony import */ var _makePaths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makePaths */ \"./src/makePaths.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\n\r\n\r\nfunction mapGenerator(sizeX, sizeY) {\r\n  let mapArray = Object(_generateBaseMapArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sizeX, sizeY);\r\n  mapArray = Object(_distributeSetPieces__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sizeX, sizeY, mapArray);\r\n  mapArray = Object(_makePaths__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(sizeX, sizeY, mapArray);\r\n  Object(_drawMap__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sizeX, sizeY, mapArray);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/mapGenerator.js?");

/***/ }),

/***/ "./src/randomNumGenerator.js":
/*!***********************************!*\
  !*** ./src/randomNumGenerator.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return randomNumberGenerator; });\n/* eslint-disable linebreak-style */\r\nfunction randomNumberGenerator(loLimit, range) {\r\n  return Math.floor(Math.random() * (range)) + (loLimit);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/randomNumGenerator.js?");

/***/ }),

/***/ "./src/setPieces.js":
/*!**************************!*\
  !*** ./src/setPieces.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable linebreak-style */\r\n\r\n// cellTypes:\r\n//        0 = wall\r\n//        1 = room\r\n//        2 = exit\r\n\r\nconst setPieces = [\r\n  {\r\n    name: 'entrance',\r\n    description: 'There is a hole above you',\r\n    cellType: 2,\r\n  },\r\n  {\r\n    name: 'exit',\r\n    description: 'There is a hole in the floor leading down...',\r\n    cellType: 3,\r\n  },\r\n  {\r\n    name: 'storage room',\r\n    description: 'Lots of stuff in here.',\r\n    cellType: 4,\r\n  },\r\n  {\r\n    name: 'other hole up',\r\n    description: 'There is another hole in the ceiling here',\r\n    cellType: 4,\r\n  },\r\n  {\r\n    name: 'other hole up',\r\n    description: 'There is another hole in the ceiling here',\r\n    cellType: 4,\r\n  },\r\n  {\r\n    name: 'other hole up',\r\n    description: 'There is another hole in the ceiling here',\r\n    cellType: 4,\r\n  },\r\n  {\r\n    name: 'other hole up',\r\n    description: 'There is another hole in the ceiling here',\r\n    cellType: 4,\r\n  },\r\n];\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (setPieces);\r\n\n\n//# sourceURL=webpack:///./src/setPieces.js?");

/***/ }),

/***/ "./src/validCell.js":
/*!**************************!*\
  !*** ./src/validCell.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return validCell; });\n/* harmony import */ var _conflictCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conflictCheck */ \"./src/conflictCheck.js\");\n/* harmony import */ var _isWithinBounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isWithinBounds */ \"./src/isWithinBounds.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\nfunction validCell(sizeX, sizeY, cellCoords, mapArray) {\r\n  if (!Object(_isWithinBounds__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sizeX, sizeY, cellCoords) || Object(_conflictCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cellCoords, mapArray)) {\r\n    return false;\r\n  }\r\n  return true;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/validCell.js?");

/***/ })

/******/ });