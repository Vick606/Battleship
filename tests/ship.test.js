import Ship from '../src/ship';

describe('Ship', () => {
  let ship;

  beforeEach(() => {
    ship = Ship(3);
  });

  test('should create a ship with the correct length', () => {
    expect(ship.length).toBe(3);
  });

  test('should not be sunk initially', () => {
    expect(ship.isSunk()).toBe(false);
  });

  test('should register hits', () => {
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});