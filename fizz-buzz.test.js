const FizzBuzz = require('./fizz-buzz');

describe("FizzBuzz replacer", () => {
  it("replace all", () => {
    expect(FizzBuzz(['Buzz', 11, 'Fizz', 13, 14, 15])).toEqual(['Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
  });
});