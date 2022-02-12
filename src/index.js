function newShip(length) {
  return {
    length,
    positions: [],
  };
}
// draw the game board
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
    currentBoardPiece.setAttributes(
        data-row: rowCounter.toString();
        data-column: 
    );
  }
}

exports.newShip = newShip;
