import React, {useEffect, useState} from 'react'
const axios = require("axios")
const url_api = "http://localhost:8080/api/urls"

const useUrls = () => {
    const [urls, setUrls] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/urls`)
        .then(res => {
            console.log({res})
            setUrls(res.data)
        })
        .catch(errOnGet => {
            console.log({errOnGet})
        })
    },[])

    const addUrl = longURL => {
        return axios.post(`http://localhost:8080/api/urls`, {longURL})
        .then(res => {
            setUrls(res.data)
        })
        .catch(errOnAdd => {
            console.log({errOnAdd})
        })
    }

    return {urls, addUrl}
}

export default useUrls