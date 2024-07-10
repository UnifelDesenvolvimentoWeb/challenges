const sumThreeArrays = require("../src/challenge01");

test('sums arrays correctly', () => {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];

  const result = sumThreeArrays(array1, array2, array3);

  expect(result).toEqual({
    sumArray1: 6,
    sumArray2: 15,
    sumArray3: 24
  });
});

test('handles empty arrays', () => {
  const array1 = [];
  const array2 = [];
  const array3 = [];

  const result = sumThreeArrays(array1, array2, array3);

  expect(result).toEqual({
    sumArray1: 0,
    sumArray2: 0,
    sumArray3: 0
  });
});

test('handles arrays of different lengths', () => {
  const array1 = [1, 2];
  const array2 = [4, 5, 6];
  const array3 = [7];

  const result = sumThreeArrays(array1, array2, array3);

  expect(result).toEqual({
    sumArray1: 3,
    sumArray2: 15,
    sumArray3: 7
  });
});

test('handles arrays with negative numbers', () => {
  const array1 = [-1, -2, -3];
  const array2 = [-4, -5, -6];
  const array3 = [-7, -8, -9];

  const result = sumThreeArrays(array1, array2, array3);

  expect(result).toEqual({
    sumArray1: -6,
    sumArray2: -15,
    sumArray3: -24
  });
});

test('uses only one for loop', () => {
  const functionString = sumThreeArrays.toString();
  const forLoopMatches = functionString.match(/for\s*\(/g) || [];
  expect(forLoopMatches.length).toBe(1);
});