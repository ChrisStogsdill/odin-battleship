/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("function newShip(length) {\n  return {\n    length,\n    positions: [],\n  };\n}\n// function to draw the game board\nfunction drawGameBoard(GameBoardLength = 10, containerId = 'game-board-container') {\n  const gameBoardContainer = document.getElementById(containerId);\n  const singleSquareWidth = gameBoardContainer.clientWidth / GameBoardLength;\n  const singleSquareHeight = gameBoardContainer.clientWidth / GameBoardLength;\n  const gameBoardSquaresCount = GameBoardLength * GameBoardLength;\n  let rowCounter = 0;\n  let columnCounter = 0;\n\n  // loop that goes for gameBoardSquaresCount times\n  for (let i = 0; i < gameBoardSquaresCount; i += 1) {\n    const currentBoardPiece = gameBoardContainer.appendChild(document.createElement('div'));\n    // set width and height of individual square\n    currentBoardPiece.style.height = singleSquareHeight;\n    currentBoardPiece.style.width = singleSquareWidth;\n    // set attributes\n    currentBoardPiece.setAttribute('data-row', rowCounter);\n    currentBoardPiece.setAttribute('data-column', columnCounter);\n\n    // increment columnCounter\n    columnCounter = Math.floor((i + 1) / 10);\n    // increment rowCounter\n    if (rowCounter === GameBoardLength - 1) {\n      rowCounter = 0;\n    } else {\n      rowCounter += 1;\n    }\n  }\n}\n\n// function to clear the game board\nfunction clearGameBoard() {\n  const gameBoardContainer = document.getElementById('game-board-container');\n  while (gameBoardContainer.hasChildNodes) {\n    gameBoardContainer.removeChild(gameBoardContainer.firstChild);\n  }\n}\n\n// draw game board\ndrawGameBoard();\n\n\nexports.newShip = newShip;\n\n\n//# sourceURL=webpack://odin-battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__);
/******/ 	
/******/ })()
;