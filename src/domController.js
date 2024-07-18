import GameController from './gameController';

const DOMController = (() => {
  let playerName = '';

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
    if (GameController.getCurrentPlayer() === 'player') {
      const result = GameController.playTurn(x, y);
      updateBoard(result.target, x, y, result.result);
      updateTurnDisplay();
      checkGameOver();
    }
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
      messageBox.textContent = `Game Over! ${winner === 'player' ? playerName : 'Computer'} wins!`;
      messageBox.style.display = 'block';
      document.getElementById('computer-board').removeEventListener('click', handleCellClick);
    }
  };

  const updateTurnDisplay = () => {
    const turnDisplay = document.getElementById('turn-display');
    const currentPlayer = GameController.getCurrentPlayer();
    turnDisplay.textContent = `${currentPlayer === 'player' ? playerName + "'s" : "Computer's"} turn`;
  };

  const initDOM = () => {
    const setupScreen = document.getElementById('setup-screen');
    const gameScreen = document.getElementById('game-screen');
    const startButton = document.getElementById('start-game');
    const playerNameInput = document.getElementById('player-name');
    const randomizeButton = document.getElementById('randomize-ships');
    const resetButton = document.getElementById('reset-game');

    startButton.addEventListener('click', () => {
      playerName = playerNameInput.value || 'Player';
      setupScreen.style.display = 'none';
      gameScreen.style.display = 'block';
      startGame();
    });

    randomizeButton.addEventListener('click', () => {
      GameController.randomizeShips();
      renderBoards();
    });

    resetButton.addEventListener('click', () => {
      setupScreen.style.display = 'block';
      gameScreen.style.display = 'none';
      playerNameInput.value = '';
    });
  };
  
  const startGame = () => {
    GameController.initGame();
    renderBoards();
    updateTurnDisplay();
  };

  const renderBoards = () => {
    const playerBoard = document.getElementById('player-board');
    const computerBoard = document.getElementById('computer-board');
    renderBoard(GameController.getPlayerBoard(), playerBoard);
    renderBoard(GameController.getComputerBoard(), computerBoard, true);
  };

  return { initDOM };
})();

export default DOMController;