import Ship from './ship';
import Gameboard from './gameboard';
import Player from './player';

const GameController = (() => {
  let playerBoard;
  let computerBoard;
  let currentPlayer;
  let player;
  let computer;

  const initGame = () => {
    playerBoard = Gameboard();
    computerBoard = Gameboard();
    player = Player('human');
    computer = Player('computer');
    currentPlayer = 'player';

    randomizeShips();
  };

  const randomizeShips = () => {
    playerBoard.resetBoard();
    computerBoard.resetBoard();

    const ships = [
      Ship(5), Ship(4), Ship(3), Ship(3), Ship(2)
    ];

    ships.forEach((ship) => {
      placeShipRandomly(playerBoard, ship);
      placeShipRandomly(computerBoard, ship);
    });
  };

  const placeShipRandomly = (board, ship) => {
    let placed = false;
    while (!placed) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
      if (board.placeShip(ship, x, y, direction)) {
        placed = true;
      }
    }
  };

  const playTurn = (x, y) => {
    if (currentPlayer === 'player') {
      const result = computerBoard.receiveAttack(x, y);
      if (!result) {
        currentPlayer = 'computer';
        setTimeout(computerPlay, 500); // Delay for better UX
      }
      return { target: 'computer', result, x, y };
    }
  };

  const computerPlay = () => {
    const { x, y } = computer.makeMove(playerBoard);
    const result = playerBoard.receiveAttack(x, y);
    currentPlayer = 'player';
    return { target: 'player', x, y, result };
  };

  const checkGameOver = () => {
    if (playerBoard.allShipsSunk()) return 'computer';
    if (computerBoard.allShipsSunk()) return 'player';
    return false;
  };

  const getPlayerBoard = () => playerBoard.getBoard();
  const getComputerBoard = () => computerBoard.getBoard();
  const getCurrentPlayer = () => currentPlayer;

  return { 
    initGame, 
    playTurn, 
    checkGameOver, 
    getPlayerBoard, 
    getComputerBoard,
    getCurrentPlayer,
    randomizeShips
  };
})();

export default GameController;