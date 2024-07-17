const Player = (type) => {
    const makeMove = (enemyBoard) => {
      if (type === 'computer') {
        let x, y;
        do {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
        } while (enemyBoard.getBoard()[x][y] === 'hit' || enemyBoard.getBoard()[x][y] === 'miss');
        return { x, y };
      } else {
        // For human players, return a dummy move
        // In the actual game, this will be handled by the UI
        return { x: -1, y: -1 };
      }
    };
  
    return {
      type,
      makeMove
    };
  };
  
  export default Player;