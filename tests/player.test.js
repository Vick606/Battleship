import Player from '../src/player';
import Gameboard from '../src/gameboard';

describe('Player', () => {
  let computerPlayer;
  let humanPlayer;
  let enemyBoard;

  beforeEach(() => {
    computerPlayer = Player('computer');
    humanPlayer = Player('human');
    enemyBoard = Gameboard();
  });

  test('computer should make a legal move', () => {
    const move = computerPlayer.makeMove(enemyBoard);
    expect(move).toHaveProperty('x');
    expect(move).toHaveProperty('y');
    expect(move.x).toBeGreaterThanOrEqual(0);
    expect(move.x).toBeLessThan(10);
    expect(move.y).toBeGreaterThanOrEqual(0);
    expect(move.y).toBeLessThan(10);
  });

  test('human should return a dummy move', () => {
    const move = humanPlayer.makeMove(enemyBoard);
    expect(move).toEqual({ x: -1, y: -1 });
  });

  test('computer should not repeat moves', () => {
    const moves = new Set();
    for (let i = 0; i < 100; i++) {
      const move = computerPlayer.makeMove(enemyBoard);
      const moveString = `${move.x},${move.y}`;
      expect(moves.has(moveString)).toBe(false);
      moves.add(moveString);
    }
  });
});