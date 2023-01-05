import reverseString from './reverseString';

test('It is reversed', () => {
  expect(reverseString('hello')).toMatch('olleh');
});

test('Double check for reversed', () => {
  expect(reverseString('Racecar')).toMatch('racecaR');
});
