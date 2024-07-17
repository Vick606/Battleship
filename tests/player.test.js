import Player from '../src/player';
import Gameboard from '../src/gameboard';

describe('Player', () => {
  let player;
  let enemyBoard;

  beforeEach(() => {
    player = Player('human');  // Pass 'human' as an argument
    enemyBoard = Gameboard();
  });

  test('should make a legal move', () => {
    const move = player.makeMove(enemyBoard);
    expect(move).toHaveProperty('x');
    expect(move).toHaveProperty('y');
    expect(move.x).toBeGreaterThanOrEqual(0);
    expect(move.x).toBeLessThan(10);
    expect(move.y).toBeGreaterThanOrEqual(0);
    expect(move.y).toBeLessThan(10);
  });

  test('should not repeat moves', () => {
    const moves = new Set();
    for (let i = 0; i < 100; i++) {
      const move = player.makeMove(enemyBoard);
      const moveString = `${move.x},${move.y}`;
      expect(moves.has(moveString)).toBe(false);
      moves.add(moveString);
    }
  });
});