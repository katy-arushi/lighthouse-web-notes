import { useState, useEffect } from "react";

export default function Counter(){
    const [counter, setCounter] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        console.log("Changing the title");
        document.title = `You Clicked ${counter} times.`
    }, [counter]);

    // useEffect(() => {
    //     console.log("inside second useEffect");
    //    setTimeout(() => {
    //        console.log(`Counter is ${counter}.`)
    //    }, 3000)
    // });

    
    // useEffect(() => {
    //     console.log("inside second useEffect");
    //    const interval = setInterval(() => {
    //        console.log(`Counter is ${counter}.`)
    //    }, 3000)

    //   const clearTheInterval = () => {clearInterval(interval);}

    //   return clearTheInterval;
    // });

    return(
        <div>
        <label>
        You clicked {counter} times
        </label>
        <button onClick= {() => setCounter(counter + 1)}>
            Click Here!
        </button>


        <div>
            <label>Search Here</label>
            <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        </div>
        </div>
    )
}