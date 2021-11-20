import './App.css';
import Color from './components/Color';
import Login from './components/Login'
import Register from './components/Register'
import Scheduler from './components/Scheduler';
const colors = ['firebrick', 'red', 'green', 'lime', 'salmon', 'darksalmon', 'blue', 'navy'];

function App() {
  return (
    <div className="App">
      <h1>Custom hooks </h1>
      <Color colors={colors}/>
      <Login/>
      <Register/>
      {/* <Scheduler/> */}
    </div>
  );
}

export default App;
