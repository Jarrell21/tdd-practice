import caesarCipher from './caesarCipher';

test('letter j will be letter k', () => {
  expect(caesarCipher('j')).toMatch('k');
});

test('letter z will be letter a', () => {
  expect(caesarCipher('z')).toMatch('a');
});

test('hello wil be ifmmp', () => {
  expect(caesarCipher('hello')).toMatch('ifmmp');
});

test('alphabet wil be ciphered', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz')).toMatch(
    'bcdefghijklmnopqrstuvwxyza'
  );
});
