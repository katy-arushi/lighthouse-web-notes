

// objects  : key -> value
// arrays : index -> value



let person1 = {
    firstName : "Mahsa",
    lastName : "Aghajani",
    age: 21,
    favoriteVegetables : ["Broccoli", "Celeri"],
    printName: function(){
        console.log(`My name is ${firstName} ${lastName}`)
    }
}

//iterate
for(const key of person1){
    // console.log(`${key} : ${person1.key}` )
    console.log(key)
}

let myArray = Object.keys(person1)
console.log(myArray)

const myArr = [10, 20, 30]
for(const index in myArr){
    // console.log(index)
}