import GameController from './gameController';

const DOMController = (() => {
  const renderBoard = (board, element, isEnemy = false) => {
    element.innerHTML = '';
    board.forEach((row, i) => {
      row.forEach((cell, j) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        if (!isEnemy) {
          if (cell === 'ship') cellElement.classList.add('ship');
          if (cell === 'hit') cellElement.classList.add('hit');
          if (cell === 'miss') cellElement.classList.add('miss');
        } else {
          if (cell === 'hit') cellElement.classList.add('hit');
          if (cell === 'miss') cellElement.classList.add('miss');
        }
        if (isEnemy) {
          cellElement.addEventListener('click', () => handleCellClick(i, j));
        }
        element.appendChild(cellElement);
      });
    });
  };

  const handleCellClick = (x, y) => {
    const result = GameController.playTurn(x, y);
    updateBoard(result.target, x, y, result.result);
    checkGameOver();
  };

  const updateBoard = (target, x, y, result) => {
    const board = document.getElementById(`${target}-board`);
    const cell = board.children[x * 10 + y];
    if (result === 'hit') {
      cell.classList.add('hit');
      cell.innerHTML = '<img src="assets/explosion.svg" alt="Hit">';
    } else if (result === 'miss') {
      cell.classList.add('miss');
      cell.innerHTML = '<img src="assets/water.svg" alt="Miss">';
    }
  };

  const checkGameOver = () => {
    const winner = GameController.checkGameOver();
    if (winner) {
      const messageBox = document.getElementById('message-box');
      messageBox.textContent = `Game Over! ${winner} wins!`;
      messageBox.style.display = 'block';
    }
  };

  const initDOM = () => {
    GameController.initGame();
    const playerBoard = document.getElementById('player-board');
    const computerBoard = document.getElementById('computer-board');
    renderBoard(GameController.getPlayerBoard(), playerBoard);
    renderBoard(GameController.getComputerBoard(), computerBoard, true);
  };

  return { initDOM };
})();

export default DOMController;