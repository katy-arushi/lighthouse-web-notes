# W1D1 - Objects in JS

# Live Coding

Don't try to replicate the same code on your screen and instead pay attention and collaborate/question the code that's being written on screen.

# Today's Objectives

- Primitive data types
- Object Fundamentals
- Object keys
- Pass By Value
- What is this?

## Primitive Data Types

There are 7 primitive types in JS:

- string
- number
- bigint
- boolean
- null
- undefined
- symbol

All primitive types are immutable in JS:

```javascript
let myName = "MAHSA";
let myNewName = myName.toLocaleLowerCase();
console.log(myNewName); // "mahsa"
console.log(myName); // "MAHSA"
```

```javascript
let myAge = 20;
let myNewAge = myAge;

myNewAge = 21;
console.log(myAge); // 20
```

## Object Fundamentals

An object is a collection of properties.
A property is an association between a name (or key) and a value.
If the property's value is a function, then the property is known as a method.
An object can be defined using an object initializer:

```javascript
const person1 = {
  firstName: "Mahsa",
  lastName: "Aghajani",
  age: 22,
  favoriteVegetables: ["Broccoli", "Celeri"],
  printName: function () {
    console.log(`My name is Mahsa Aghajani!`);
  },
};
```

Properties of JavaScript objects can also be accessed or set using:

- dot notation : By literally using the key => person1.firstName
- bracket notation : When the key is the value of some variable => person1[myVar]

Unassigned properties of an object are undefined!

```javascript
console.log(person1.Age); // undefined (JS is case sensitive!)
```

### Object keys

There are few ways for getting the keys in an object:

- Iterating over the object

```javascript
for (const key in person1) {
  console.log(key);
}
```

- using Object.keys() method:

```javascript
const keyArray = Object.keys(person1);
```

## Pass By Value

Functions can update the object but not reassignt it.

```javascript
const vegetable = "Broccoli";
const printDifferentVegetabe = function (veg) {
  veg = "Spinach";
  console.log("Inside the function: ", veg);
};

printDifferentVegetabe(vegetable); // Inside the function: Spinach
console.log(vegetable); // Broccoli
```

If you pass an object, the contents of the object can be change(updated) by the function:

```javascript
const vegetableObj = {
  name: "Broccoli",
  color: "green",
};

const printDifferentVegetabe2 = function (veg) {
  veg.name = "Carrot";
  console.log("Inside the function: ", veg.name);
};

printDifferentVegetabe2(vegetableObj); // Inside the function: Carrot
console.log(vegetableObj.name); // Carrot
```

But reassigning the reference to the object in the funciton, will not impact the original reference:

```javascript
const vegetableObj = {
  name: "Broccoli",
  color: "green",
};

const printDifferentVegetabe2 = function (veg) {
  veg = {};
  console.log("Inside the function: ", veg.name);
};

printDifferentVegetabe2(vegetableObj); // Inside the function: undefined
console.log(vegetableObj.name); // Broccoli
```

## What is this?

We use this to refer the context, it can have different values depending on where it is used.

```javascript
const obj = {
  thing: 1,
  myFunc: function () {
    console.log(this);
  },
};
// this refers to obj
```

If this is used in a normal function it will check what this was equal to where the function was called and will equal that.

```javascript
.
.
.
const myFunc = function(){
   console.log(this);
}

//==> Whatever this equals here
console.log(this);

myFunc() //===> will be the same value of this in myFunc
.
.
.
// both console logs will log the same this
// the value of this depends on where this code is
```

If this is called outside of any object it will refer to the global object, in node applications this will be the module object.

```javascript
console.log(this);
//this will refer to the global object/node module
```

In summary:

> Context === this

```javascript
let person1 = {
  firstName: "Mahsa",
  lastName: "Aghajani",
  age: 21,
  favoriteVegetables: ["Broccoli", "Celeri"],
  printName: function () {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
    console.log(this);
  },
};

person1.printName(); // My name is Mahsa Aghajani.
```
