import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <ul>
            {/* <li href="/"> Home </li> */}
            {/* <li > <a href="/urls"> Urls </a> </li> */}
            <Link to="/"> HOME </Link>
            <Link to="/urls"> URLS </Link>
            <Link to="/urls/new"> ADD NEW URL </Link>
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
        </ul>
    )
}

export default Nav