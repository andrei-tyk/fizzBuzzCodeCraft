const Buzz = require("./buzz.js");

describe("Buzz", () => {
    it("replace all", () => {
        expect(Buzz([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, "Buzz"]);
    });
});