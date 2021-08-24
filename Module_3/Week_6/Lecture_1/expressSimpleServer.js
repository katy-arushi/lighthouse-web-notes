const express = require('express')
const morgan = require('morgan')


const app = express()
const port = 8080

app.set("view engine", "ejs")
app.set("views", "views")

app.use(morgan('dev'))
app.use((req, res, next) => {
    console.log(`The request was received and this is its method ${req.method}`)

    next()
})

const favoriteSeries = {
    1 : {
        name : "Breaking Bag",
        rating : 9
    },
    2 : {
        name : "Vikings",
        rating : 10
    },
    3 : {
        name: "Sponge Bob Square Pants",
        rating : 11
    }
}

// app.[METHOD]('URL', (req, res) => {})

app.get('/', (req, res) => {
    res.send("This is the homePage by express server!")
})

app.get("/about", (req, res) => {
    res.send("This is the about page by express server!")
})

app.get('/favoriteSeries', (req, res) => {
    res.render("index", {favoriteSeries : favoriteSeries})
})

app.get("/favoriteSeries/:id", (req, res) => {
    console.log(req.params)
    const id = req.params.id
    res.send(favoriteSeries[id])
})

// app.get("/favotiteSeries/2", (req, res) => {
//     res.send(favoriteSeries[2])
// })

// app.get("/favotiteSeries/3", (req, res) => {
//     res.send(favoriteSeries[3])
// })


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

