// Make a function that rolls a dice and returns a value ( 1 - 3 )
// The roll should take around 2 seconds...
// and make 3 consecutive dice rolls

// const randomNumber = function() { ... }

const randomNumber = (diceSize) => {
    const result = Math.floor(Math.random() * diceSize) + 1;
    return result;
}

const diceRoll = () => {
    return new Promise((resolve, reject) => {
        console.log("dice is rolling...")
        setTimeout(() => {
            const result = randomNumber(6);
            console.log(  `result: ${result}`)
            if (result > 3){
                reject("Something went wrong")
            } else {
                resolve(result) // result we want from the function we put in resolve
            }
        }, 2000);
    })
}

diceRoll()
.then((myNumber) => {
  console.log(`function has been called: ${myNumber}`)
  return diceRoll()
})
.then((myNumber)=>{
  console.log(`function has been called a second time: ${myNumber}`)
  return diceRoll()
})
.then((myNumber)=>{
  console.log(`function has been called a third time: ${myNumber}`)
  return diceRoll()
})
.catch((err)=>{
  console.log(`err: ${err}`)
})