import analyzeArray from './analyzeArray';

test('[1, 8, 3, 4, 2, 6]; { average: 4, min: 1, max: 8, length: 6 }', () => {
  const data = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(data).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});
