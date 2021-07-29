//primitives

//string
//number
//bigint
//boolean
//null
//undefined
//symbol

let myStr = "Mahsa"
console.log(typeof(myStr))

let myNumber = 12
console.log(typeof(myNumber))
console.log(Number.MAX_SAFE_INTEGER)

let myBigNumber = 9007199254740994n;
console.log(typeof(myBigNumber))


let myNumber2 = Number("M");
console.log(myNumber2, typeof(myNumber2))

console.log(myNumber.toString())


let myVar;
console.log(myVar, typeof(myVar))

let myNull = null;
console.log(myNull, typeof(myNull))


let mySymbol = Symbol("sym")
let mySymbol2 = Symbol("sym")
console.log(mySymbol.toString(), typeof(mySymbol))


//Falsey values in JS
// False, "", 0, null, undefined, NaN


//Primitive wrapper objects

//String
//Number
//Bigint
//Boolean
//Symbol

console.log("********************")

//immutability 
let myName = "MAHSA"
console.log(myName)
let myNewName = myName.toLocaleLowerCase()
console.log(myNewName)

myName = "Anthony"
console.log(myName)


let myAge = 20;
let myNewAge = myAge;

myNewAge = 21;
myAge = 22;
console.log(myAge);






