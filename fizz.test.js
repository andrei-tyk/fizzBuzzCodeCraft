var Fizz = require("./fizz.js")

describe("Replaces any integers that are divisible by 3 with Fizz", () => {
  it("Is 3 replaced by Fizz", () => {
      expect(Fizz([1, 2, 3, 4, 5])).toEqual([1, 2, "Fizz", 4, 5]);
  });
});
