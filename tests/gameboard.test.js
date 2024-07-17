import Gameboard from '../src/gameboard';
import Ship from '../src/ship';

describe('Gameboard', () => {
  let gameboard;

  beforeEach(() => {
    gameboard = Gameboard();
  });

  test('should place ship at specific coordinates', () => {
    const ship = Ship(3);
    gameboard.placeShip(ship, 0, 0, 'horizontal');
    expect(gameboard.getBoard()[0][0]).toBe(ship);
    expect(gameboard.getBoard()[0][1]).toBe(ship);
    expect(gameboard.getBoard()[0][2]).toBe(ship);
  });

  test('should receive attack and record hit', () => {
    const ship = Ship(3);
    gameboard.placeShip(ship, 0, 0, 'horizontal');
    expect(gameboard.receiveAttack(0, 0)).toBe('hit');
    expect(gameboard.getBoard()[0][0]).toBe('hit');
  });

  test('should receive attack and record miss', () => {
    expect(gameboard.receiveAttack(0, 0)).toBe('miss');
    expect(gameboard.getBoard()[0][0]).toBe('miss');
  });

  test('should report if all ships are sunk', () => {
    const ship1 = Ship(2);
    const ship2 = Ship(1);
    gameboard.placeShip(ship1, 0, 0, 'horizontal');
    gameboard.placeShip(ship2, 2, 2, 'vertical');
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(2, 2);
    expect(gameboard.allShipsSunk()).toBe(true);
  });
});