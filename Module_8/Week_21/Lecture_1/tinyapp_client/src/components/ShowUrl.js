import React from 'react'
import { Routes, Route, useParams } from "react-router-dom";

const ShowUrl = ({urls}) => {

    const {shortURL} = useParams()

    const url = urls.find(item => item.shortURL === shortURL)
    
    return(
        <>
        {url && <>
            <h1>Welcome to ShowUrl</h1>
            <h2>
                short: {url.shortURL} 
            </h2>
            <h3>
                 long: {url.longURL}
            </h3>
            <h4>
                 user: {url.userID}
            </h4>
        </>
        }
            {!url && <h2>There is no url given</h2>}
        </>
    )
}

export default ShowUrl