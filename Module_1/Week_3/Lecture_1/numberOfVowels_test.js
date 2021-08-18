const numberOfVowels = require("./numberOfVowels")
const assert = require("assert").strict

try{
    assert.equal(numberOfVowels("sushi"), 2, "sushi has 2 vowels")
}
catch(error){
    console.log(`${error.name} ${error.message} while actual value is ${error.actual}`)
}

try{
    assert.equal(numberOfVowels("pizzaa"), 3, "pizaa has 2 vowels")
}
catch(error){
    console.log(`${error.name} ${error.message} while actual value is ${error.actual}`)
}



