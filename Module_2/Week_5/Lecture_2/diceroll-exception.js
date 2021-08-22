// Make a function that rolls a dice and returns a value ( 1 - 6 )
// The roll should take around 2 seconds...
// and make 3 consecutive dice rolls

// const randomNumber = function() { ... }
const randomNumber = (diceSize) => {
  const result = Math.floor(Math.random() * diceSize) + 1;
  // undeclared
  return result;
}

const diceRoll = (randNumFunc, cb)  => {
  console.log("dice is rolling...");
  const result = randNumFunc(6);
  setTimeout(() => {
      cb(result);
  },1000);
}

try {
  diceRoll(randomNumber, (message)=>{
    console.log(`your number is: ${message}`)
  })
} catch (error) {
  console.log(`error: ${error.message}`)
}