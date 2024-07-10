const printSquare = require("../src/challenge3");

describe('printSquare', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('prints square of size 3', () => {
    printSquare(3);
    expect(console.log).toHaveBeenCalledWith('***');
    expect(console.log).toHaveBeenCalledWith('***');
    expect(console.log).toHaveBeenCalledWith('***');
    expect(console.log).toHaveBeenCalledTimes(3);
  });

  test('prints square of size 5', () => {
    printSquare(5);
    expect(console.log).toHaveBeenCalledWith('*****');
    expect(console.log).toHaveBeenCalledWith('*****');
    expect(console.log).toHaveBeenCalledWith('*****');
    expect(console.log).toHaveBeenCalledWith('*****');
    expect(console.log).toHaveBeenCalledWith('*****');
    expect(console.log).toHaveBeenCalledTimes(5);
  });

  test('prints error for n <= 1', () => {
    printSquare(1);
    expect(console.log).toHaveBeenCalledWith('O valor de n deve ser maior que 1.');
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});