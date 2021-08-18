// make a function that loops through the array
// and also takes a callback for the user to do anything with
// each value of the array..
// for (let i = 0; i < arr.length; i++)
const array = [1,2,3,4,6,7,8,9,10];

const myForEach = function(arr, callback) {
    for (let index in arr) {
        callback(arr[index], index);
    }
}


myForEach(array, (elem, i) => {
    console.log("this is my element ", elem);
    console.log("this is the index ",i);
})



// map // forEach // Filter // 

const array = [1, 'two', 3, 'four', 5];


// array.forEach(function(el, index){
//     console.log("this is my lement from real foreach", el)
//     console.log("this is my index from real foreach", index)
// })

// how many times have you looped through an array
// while making a new array, and pushing some values into the new array

// Bonus => map example

const arr2 = [1,2,3,4,5]

const newArr = arr2.map((elem) => {
    console.log(elem);
    return elem * 2;
})

console.log(newArr);