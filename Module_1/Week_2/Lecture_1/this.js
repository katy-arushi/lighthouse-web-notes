const myFunc = function(){
    console.log(this)
}

// myFunc();


let person1 = {
    firstName : "Mahsa",
    lastName : "Aghajani",
    age: 21,
    favoriteVegetables : ["Broccoli", "Celeri"],
    printName: function(){
        console.log(`My name is ${this.firstName} ${this.lastName}`)
        console.log(this)
    }
}

person1.printName();
