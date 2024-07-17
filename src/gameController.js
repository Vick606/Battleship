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

    // Place ships (for now, we'll use predetermined coordinates)
    const ships = [
      Ship(4), Ship(3), Ship(3), Ship(2), Ship(2), Ship(2)
    ];

    ships.forEach((ship, index) => {
      playerBoard.placeShip(ship, index, 0, 'horizontal');
      computerBoard.placeShip(Ship(ship.length), index, 9 - index, 'vertical');
    });
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

  return { 
    initGame, 
    playTurn, 
    checkGameOver, 
    getPlayerBoard, 
    getComputerBoard 
  };
})();

export default GameController;