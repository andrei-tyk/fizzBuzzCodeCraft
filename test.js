const generateNumbers = require('./generate_numbers');
const OutputFizzBuzz = require('./index');

describe("FizzBuzz", () => {
  it('generate numbers from 1 to 5', () => {
    expect(generateNumbers(1,5)).toEqual([
      1,2,3,4,5
    ])
  });

  it('replaces numbers that dived with 3 with Fizz and those that dived with 5 with Buzz, and numbers that divide with both 3 and 5 are replaced with FizzBuzz', () => {
    expect(OutputFizzBuzz(generateNumbers(1,15))).toEqual('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz');
  });
});