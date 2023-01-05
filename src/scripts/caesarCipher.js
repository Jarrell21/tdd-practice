function caesarCipher(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const cipheredString = [];

  for (let i = 0; i < string.length; i += 1) {
    for (let j = 0; j < alphabet.length; j += 1) {
      if (alphabet[j] === string[i]) {
        if (j !== alphabet.length - 1) {
          cipheredString.push(alphabet[j + 1]);
        } else {
          cipheredString.push(alphabet[0]);
        }
      }
    }
  }

  return cipheredString.join().replace(/,/g, '');
}

export default caesarCipher;
