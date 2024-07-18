const Gameboard = () => {
    const board = Array(10).fill(null).map(() => Array(10).fill(null));
    const ships = [];
  
    const placeShip = (ship, x, y, orientation) => {
      if (orientation === 'horizontal') {
        if (y + ship.length > 10) return false;
        for (let i = 0; i < ship.length; i++) {
          if (board[x][y + i] !== null) return false;
        }
        for (let i = 0; i < ship.length; i++) {
          board[x][y + i] = ship;
        }
      } else {
        if (x + ship.length > 10) return false;
        for (let i = 0; i < ship.length; i++) {
          if (board[x + i][y] !== null) return false;
        }
        for (let i = 0; i < ship.length; i++) {
          board[x + i][y] = ship;
        }
      }
      ships.push(ship);
      return true;
    };
  
    const receiveAttack = (x, y) => {
      if (board[x][y] === 'hit' || board[x][y] === 'miss') return false;
      if (board[x][y] === null) {
        board[x][y] = 'miss';
        return 'miss';
      }
      board[x][y].hit();
      board[x][y] = 'hit';
      return 'hit';
    };
  
    const allShipsSunk = () => ships.every(ship => ship.isSunk());
  
    const getBoard = () => board.map(row => [...row]);
  
    const isValidMove = (x, y) => {
      return x >= 0 && x < 10 && y >= 0 && y < 10 && 
             board[x][y] !== 'hit' && board[x][y] !== 'miss';
    };

    const resetBoard = () => {
      board = Array(10).fill(null).map(() => Array(10).fill(null));
      ships = [];
    };
  
    return {
      placeShip,
      receiveAttack,
      allShipsSunk,
      getBoard,
      isValidMove,
      resetBoard,
    };
  };
  
  export default Gameboard;