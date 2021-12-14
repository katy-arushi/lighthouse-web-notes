import './App.css';

import ClassBasedCounter from './components/ClassbasedCounter';
import LifeCycle from './components/LifeCycle';
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">

      <Router>

      <nav>
      <Link to="/classbasedcounter">Class Based Counter </Link>
      <Link to="/lifecycle">Lifecycle </Link>
      </nav>


      <Routes>
        <Route path="/lifecycle" element={<LifeCycle />}></Route>
        <Route path="/classbasedcounter" element={<ClassBasedCounter startFrom={11} secretMessage = "Eat the Broccoli"/>}></Route>
      </Routes>

      </Router>

           
    </div>
  );
}

export default App;
