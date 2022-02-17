function newShip(length) {
  return {
    length,
    positions: [],
  };
}
// function to draw the game board
function drawGameBoard(GameBoardLength = 10, containerId = 'game-board-container') {
  const gameBoardContainer = document.getElementById(containerId);
  const singleSquareWidth = gameBoardContainer.clientWidth / GameBoardLength;
  const singleSquareHeight = gameBoardContainer.clientWidth / GameBoardLength;
  const gameBoardSquaresCount = GameBoardLength * GameBoardLength;
  let rowCounter = 0;
  let columnCounter = 0;

  // loop that goes for gameBoardSquaresCount times
  for (let i = 0; i < gameBoardSquaresCount; i += 1) {
    const currentBoardPiece = gameBoardContainer.appendChild(document.createElement('div'));
    // set width and height of individual square
    currentBoardPiece.style.height = singleSquareHeight;
    currentBoardPiece.style.width = singleSquareWidth;
    // set attributes
    currentBoardPiece.setAttribute('data-row', rowCounter);
    currentBoardPiece.setAttribute('data-column', columnCounter);

    // increment columnCounter
    columnCounter = Math.floor((i + 1) / 10);
    // increment rowCounter
    if (rowCounter === GameBoardLength - 1) {
      rowCounter = 0;
    } else {
      rowCounter += 1;
    }
  }
}

// function to clear the game board
function clearGameBoard() {
  const gameBoardContainer = document.getElementById('game-board-container');
  while (gameBoardContainer.hasChildNodes) {
    gameBoardContainer.removeChild(gameBoardContainer.firstChild);
  }
}

// draw game board
drawGameBoard();


exports.newShip = newShip;
