const countOddNumbers = require("../src/challenge02");

describe('countOddNumbers', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('prints the correct number of odd values', () => {
    const array = [1, 2, 3, 4, 5];
    countOddNumbers(array);
    expect(console.log).toHaveBeenCalledWith('Existem 3 valores ímpares no array.');
  });

  test('prints message for no odd values', () => {
    const array = [2, 4, 6, 8, 10];
    countOddNumbers(array);
    expect(console.log).toHaveBeenCalledWith('Nenhum valor ímpar encontrado.');
  });

  test('handles an empty array', () => {
    const array = [];
    countOddNumbers(array);
    expect(console.log).toHaveBeenCalledWith('Nenhum valor ímpar encontrado.');
  });

  test('handles an array with all odd values', () => {
    const array = [1, 3, 5, 7, 9];
    countOddNumbers(array);
    expect(console.log).toHaveBeenCalledWith('Existem 5 valores ímpares no array.');
  });
});