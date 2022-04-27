const generateNumbers = require('./generate_numbers');
const Buzz = require('./buzz');
const Fizz = require('./fizz');
const FizzBuzz = require('./fizz-buzz');

function OutputFizzBuzz(numbers) {
  let fizzBuzzNumbers = FizzBuzz(numbers);
  let fizzNumbers = Fizz(fizzBuzzNumbers);
  let buzzNumbers = Buzz(fizzNumbers);
  return buzzNumbers.join(',');
};

console.log(OutputFizzBuzz(generateNumbers(1,100)));

module.exports = OutputFizzBuzz;