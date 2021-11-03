import './App.css';
import Status from './components/Status'
import { useState } from 'react';

function App() {

let [counter, setCounter] = useState(0)
// let [myArray, setMyArray] = useState([])
// let [myFlag, setMyFlag] = useState(false)

const myIncrease = () => {
  setCounter(counter + 1);
  console.log(counter);
//   updateDb()
//   .then(() => {setCounter(counter + 1);} )
//   .catch(() => {})
}


  return (
    <div className="App">
      <header className="App-header">
      <Status mood="HAPPY"></Status>
      <Status mood="Sad"></Status>
      <Status mood="TIRED"></Status>
      <Status mood="HUNGRY"></Status>
      <h2>The value of the counter is {counter}</h2>
      <button onClick={() => {setCounter(counter + 1)}}>Increase!</button>
      </header>
    </div>
  );
}

export default App;


// $(#button).on('click', () => {});
// $(#button).click(() => {})