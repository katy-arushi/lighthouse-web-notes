

const intervalID = setInterval(() => console.log("drip"), 1000)

setTimeout(()=> clearInterval(intervalID), 5000)

console.log("drip")