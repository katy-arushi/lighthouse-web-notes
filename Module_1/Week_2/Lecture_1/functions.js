const vegetable = "Broccoli"
const printDifferentVegetabe = function(veg){
    veg = "Spinach";
    console.log("Inside the function: ", veg)
}


printDifferentVegetabe(vegetable);
console.log(vegetable)

// ===================================

const vegetableObj = {
    name: "Broccoli",
    color: "green"
}

const printDifferentVegetabe2 = function(veg){
    // veg.name = "Carrot"
    veg = {}
    // console.log("Inside the function: ", veg.name)
}

printDifferentVegetabe2(vegetableObj)
console.log(vegetableObj.name)
