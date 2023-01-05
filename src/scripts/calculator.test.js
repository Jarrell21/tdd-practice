import calculator from './calculator';

test('2 + 2 is equal to 4', () => {
  const value = calculator.add(2, 2);
  expect(value).toBe(4);
});

test('2 - 2 is equal to 0', () => {
  const value = calculator.subtract(2, 2);
  expect(value).toBe(0);
});

test('3 x 3 is equal to 9', () => {
  const value = calculator.multiply(3, 3);
  expect(value).toBe(9);
});

test('2 / 2 is equal to 1', () => {
  const value = calculator.divide(2, 2);
  expect(value).toBe(1);
});
