import React from 'react'
import UrlItem from './UrlItem'
import { Routes, Route, Link, Outlet } from "react-router-dom";


const Urls = (props) => {
    const urlList = props.urls.map((url, idx) => <UrlItem key={idx} url={url}/>)
    return(
        <>
            <h2>Welcome to Urls</h2>
            {urlList}
            <Outlet/>
        </>
    )
}

export default Urls