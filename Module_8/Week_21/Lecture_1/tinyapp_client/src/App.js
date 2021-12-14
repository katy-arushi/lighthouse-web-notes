import './App.css';
import Nav from './components/Nav'
import StyledNav from './components/styled/StyledNav'
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from './components/Home';
import Urls from './components/Urls';
import Login from './components/Login';
import Register from './components/Register';

import useUrls from "./hooks/useUrls"
import UrlItem from './components/UrlItem';
import ShowUrl from './components/ShowUrl';
import NewUrl from './components/NewUrl';


function App() {

  const {urls, addUrl} = useUrls()

  return (
    <div className={"App"}>
      {/* <Nav/> */}
      <StyledNav/>
      <Routes>
        <Route path="/" element={<h2> Welcome Home </h2>} />
        <Route path="urls" element={<Urls urls={urls}/>} >
          <Route path="new" element={<NewUrl addUrl={addUrl} />} />
          {/* <Route path=":shortURL" element={<ShowUrl urls={urls}/>} />  */}
        </Route>
        <Route path="/urls/:shortURL" element={<ShowUrl urls={urls}/>} /> 
        {/* <Route path="/urls" element={<Urls urls={urls}/>} />
        <Route path="/urls/new" element={<NewUrl />} />
        */}
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
