const generateNumbers = require('./generate_numbers');

it('generate numbers from 1 to 5', () => {
  expect(generateNumbers(1,5)).toEqual([
    1,2,3,4,5
  ])
});