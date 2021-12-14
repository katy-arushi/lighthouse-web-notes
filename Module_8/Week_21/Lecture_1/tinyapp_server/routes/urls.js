const express = require('express')
const router = express.Router()
const { checkAuthentification, generateRandomString } = require("../helpers");

module.exports = ({users, urlDatabase}) => {
    
    router.get('/urls', (req, res) => { 
        // convert urlDatabase to serve as array instead of object
        
        const newUrlDatabase = Object.entries(urlDatabase).map(item => {
            return {...item[1], userID: item[0]}
        })
        // console.log({newUrlDatabase})
        res.json(newUrlDatabase)
    })

    router.post('/urls', (req, res) => { 
        const longURL = req.body.longURL
        // console.log(`REQ.BODY: ${JSON.stringify(req.body)}`)
        let shortURL = generateRandomString();
        let userID = generateRandomString();
        urlDatabase[shortURL] = {
            longURL: longURL,
            shortURL: shortURL,
            userID: userID
        };
        const newUrlDatabase = Object.entries(urlDatabase).map(item => {
            return {...item[1], userID: item[0]}
        })
        res.json(newUrlDatabase)
    })

    
    router.get('/users', (req, res) => { 
        const newUsers = Object.values(users)
        console.log({newUsers})
        res.json(newUsers)
    })

    router.get('/urls/:shortURL', (req, res) => { 
        const url = urlDatabase[req.params.shortURL]
        console.log({url})
        res.json(url)
    })

    router.get('/urls/long/:longURL', (req, res) => { 
        const url = Object.values(urlDatabase).find(val => val.longURL === req.params.longURL)
        console.log({url})
        res.json({url})
    })
    
    return router
}


