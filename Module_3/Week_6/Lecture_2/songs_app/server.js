const express = require("express")
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = 8080

const app = express()

// middleware in express
// you can do something each time a request is received and give direction for next thing
let count = 0
app.use((req, res, next)=>{
  console.log(`hits count: ${count++}`)
  // res.send("stop")
  next()
})

//
app.use(morgan('dev'))
// app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs')

let lastID = 1003
const generateID =() =>{
  return lastID+1
}

const songs = {
  1000: {
    id: 1000,
    author:"beyonce",
    title: "Hallo",
    description: "best song ever"
  },
  1001: {
    id: 1001,
    author:"Justin Bieber",
    title: "Sorry",
    description: "young man to fame"
  },
  1002: {
    id: 1002,
    author:"Drake",
    title: "God's Plan",
    description: "3rd best song ever"
  }
}
// get - method - path - cb(req, res)
app.get("/", (req, res)=>{
  // console.log(`get on /`)
  res.status(204).send("<html><h1> Hello there</h1></html>")
})


// Browse - list of all the items on a articular resource
app.get("/songs", (req, res) => {
  const templateVars = {
    heading: "My fav songs",
    songs: songs,
    secret: 1234
  }
  res.render("songs_index", templateVars)
})

// get that servers us the form
app.get("/songs/new", (req, res)=> {
  res.render("song_new")
})

//  GET EDIT FORM
app.get("/songs/:id/edit", (req, res) => {
  const id = req.params.id
  const song = songs[id]
  const templateVars = {song}
  res.render("song_edit", templateVars)
})

// POST EDIT FORM - UPDATE
app.post("/songs/:id/edit", (req, res) => {
  // grab the id from params url
  const id = req.params.id
  // edit the resource from the songs database
  const {title, author, description} = req.body

  const new_song = {id, title, author, description}
  songs[id] = new_song
  //  send a response back
  res.redirect(`/songs/${id}`)
})

// Read - get one item to display based on ID
app.get("/songs/:id",(req, res)=>{
  const id = req.params.id
  // const type = typeof req.params.id
  // res.send({id, type})
  const song = songs[id]
  // const templateVars = {
  //   song: song
  // }
  const templateVars = {song}
  res.render("song_show", templateVars)
})



// Add - POST - SONGS
app.post("/songs", (req, res)=>{
  // receive data from form
  // console.log(req.body)
  // const title = req.body.title
  // const author = req.body.author
  // const description = req.body.description

  // object destructuring
  const {title, author, description} = req.body
  const id = generateID()
  const song = { id, title, author, description }
  //add the new song to the song database
  songs[id] = song
  // console.log(`title: ${title}`)
  // process the data - add song to db
  // send back a response
  res.redirect("/songs")
})

// Delete - deleting a resource
app.post("/songs/:id", (req, res) => {
  const id = req.params.id
  // delete song with the id from the songs db
  delete songs[id]
  res.redirect("/songs")
})

app.listen(port, ()=> console.log(`server listening on port: ${port}`))