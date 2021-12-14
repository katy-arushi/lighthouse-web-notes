import React from 'react'
import { Link } from "react-router-dom";


const UrlItem = ({url}) => {

    return(
        <>
            {/* <h2>Welcome to UrlItem</h2> */}
            {url && 
            <li>
                {url.shortURL} : {url.longURL} - - <Link to={`${url.shortURL}`}> {url.userID} </Link>
            </li>
            }
            {!url && <h2>There is no url given</h2>}
        </>
    )
}

export default UrlItem