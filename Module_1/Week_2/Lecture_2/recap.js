// variables
let favourite_food = 'chicken nuggets';
const G  = 9.81; // g => accelaration due to gravity

fruit = 'fish sticks'; // can change

const arr = [1,2,3]
const obj = { 
    name: "Lovemore", last: "Jokonya", sayName: myFunction
}

// Functions?
// procedure that executes and performs a certain task
// function expression

const myFunction = function (){

}
// function definition - Hoisting - lifting up - good or bad?
function myOtherFunction () {

}
// function call
myFunction()
myOtherFunction()

// anonymous function - no name function
// function () {

// }

// what is the purpose of function
// block of code to be reusable and to clean code
// pass in parameters


const name = 'Lovemore';
// const printName = function(name) {
//     console.log(name);
// }
// strings can be passed into functions
// printName('Everyone');
// printName(name);
// can numbers be passed into functions YES
// can objects be passed into functions YES
// can arrays  be passed into functions YES
// is there a paramters limits NO!

const sayHello = function(name){
    console.log("Hello", name)
}

                                     // CALLBACK
const greetings = function(name, callback) {
    console.log(callback);
    callback(name)
}

