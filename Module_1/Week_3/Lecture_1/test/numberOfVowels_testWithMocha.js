const assert = require("assert").strict
const numberOfVowels = require("../numberOfVowels")


describe("numberOfVowelsWithMocha", () => {

    it("sushi has 2 vowels", () => {
        assert.equal(numberOfVowels("sushi"), 2)

    })

    it("pizaa has 3 vowels", () => {
        assert.equal(numberOfVowels("pizaa"), 3)
    })



})