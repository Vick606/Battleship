const Player = (type) => {
    const makeMove = (enemyBoard) => {
      if (type === 'computer') {
        let x, y;
        do {
          x = Math.floor(Math.random() * 10);
          y = Math.floor(Math.random() * 10);
        } while (enemyBoard.getBoard()[x][y] === 'hit' || enemyBoard.getBoard()[x][y] === 'miss');
        return { x, y };
      }
      // For human players, moves will be handled by user input in the UI
      return null;
    };
  
    return {
      type,
      makeMove
    };
  };
  
  export default Player;