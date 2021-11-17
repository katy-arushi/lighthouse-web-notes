import './App.css';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter/>
       <FetchData/>
      </header>
    </div>
  );
}

export default App;
