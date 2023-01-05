function analyzeArray(array) {
  const average =
    array.reduce((partialSum, a) => partialSum + a, 0) / array.length;
  const { length } = array;
  const max = Math.max(...array);
  const min = Math.min(...array);
  return { average, length, max, min };
}

export default analyzeArray;
