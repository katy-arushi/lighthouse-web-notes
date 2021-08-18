const {expect} = require("chai")
const numberOfVowels = require("../numberOfVowels")

describe("numberOfVowelsWithMocha", () => {

    it("sushi has 2 vowels", () => {
        expect(numberOfVowels("sushi")).to.equal(2);

    })

    it("steak has 3 vowels", () => {
        expect(numberOfVowels("steak")).to.equal(2);
    })

})