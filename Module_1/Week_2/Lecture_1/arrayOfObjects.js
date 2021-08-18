
let person1 = {
    firstName : "Mahsa",
    lastName : "Aghajani",
    age: 21,
    favoriteVegetables : ["Broccoli", "Celeri"],
    printName: function(){
        console.log(`My name is ${firstName} ${lastName}`)
    }
}


let person2 = {
    firstName : "Jhanvi",
    lastName : "Shah",
    age: 19,
    favoriteVegetables : ["Cucomber"],
    printName: function(){
        console.log(`My name is ${firstName} ${lastName}`)
    }
}

const people = [person1, person2]

for(const person of people){
    // console.log(person)
    // console.log(person.favoriteVegetables)
    for(const veg of person.favoriteVegetables){
        console.log(veg)
    }
}

// people

//output:
// Broccoli
// Celeri
//Cucomber
