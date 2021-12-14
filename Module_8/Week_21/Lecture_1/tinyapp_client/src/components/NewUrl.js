import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate, useLocation } from "react-router-dom";


const NewUrl = ({addUrl}) => {
    const navigate = useNavigate()
    const {pathname} = useLocation()

    const [longURL, setLongURL] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log({pathname})
        addUrl(longURL)
        .then( res => {
            navigate(`${pathname}`)
            setLongURL("")
        })
        // axios.post()
        // navigate(`/urls`)
    }

    return(
        <>
            <h2>Add New NewUrl</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="longURL"
                    value={longURL}
                    onChange={e => setLongURL(e.target.value)}
                />
                <button type={"submit"}> Submit </button>
            </form>
        </>
    )
}

export default NewUrl