// Function declaration

badFunction() // HOISTING!

function badFunction(){
    console.log("I'm a bad function!")
}


// Function Expressions
const betterFunction = function(){
    console.log("I'm a better function!")
}


// Function expression(using arrow functions)
const anotherBetterFunction = () => {
    console.log("I'm a better arrow function!")
}

// betterFunction = () => {} // leads to error

// function badFunction(){
//     console.log("I'm an overwritten bad function!")
// }

// badFunction() // function is replaced easily!


//callback? any functions that are passed to any other function

//Higher order function
const doThisSeveralTimes = (callback, numberOfTimes) => {
    for(let i = 0; i < numberOfTimes; i++){
        callback()
    }
}

doThisSeveralTimes(anotherBetterFunction(), 5)