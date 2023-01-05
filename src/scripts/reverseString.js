function reverseString(string) {
  const stringArr = [];
  for (let i = string.length; i >= 0; i -= 1) {
    stringArr.push(string[i]);
  }

  return stringArr.join().replace(/,/g, '');
}

export default reverseString;
