// console.log("hi")

class Counter{
    constructor(){
        this.counter = 0;
    }

    increment(){
        this.counter += 1;
        console.log(this.counter)
    } 
}

const myCounter = new Counter();
// myCounter.increment();
// myCounter.increment();
// myCounter.increment();
// myCounter.increment();
// myCounter.increment();


let counter = 0;

const myIncreaseFunction = (n) => {
    counter += n;
    console.log(counter);
}
myIncreaseFunction(1);
myIncreaseFunction(1);
myIncreaseFunction(1);
myIncreaseFunction(1);
myIncreaseFunction(1);



