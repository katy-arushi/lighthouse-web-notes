
let person1 = {
    firstName : "Mahsa",
    lastName : "Aghajani",
    age: 21,
    favoriteVegetables : ["Broccoli", "Celeri"],
    printName: function(){
        console.log(`My name is ${firstName} ${lastName}`)
    }
}


//reading values
// console.log(person1.age)
let someVar = "age";
//console.log(person1[someVar])

person1.firstName = "Etty";
console.log(person1.firstName)
person1.favoriteVegetables.push("Spinach")
console.log(person1.favoriteVegetables)

let person2 = person1;
person2.age = 50;
console.log(person1.age)


person1 = {}