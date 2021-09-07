const express = require("express")
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const port = 8080
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

const {getUserWithId, getUserWithEmail, authenticateUser} = require("./helpers")
app.set('view engine', 'ejs')

// middleware in express
// you can do something each time a request is received and give direction for next thing
let count = 0
app.use((req, res, next)=>{
  console.log(`hits count: ${count++}`)
  next()
})

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

const users = {
  // 1000: { id: 1000, email: "me@mail.com", password: "1234"},
  1000: { id: 1000, email: "me@mail.com", password: bcrypt.hashSync("1234", saltRounds)},
  // 1001: { id: 1001, email: "me2@mail.com", password: "1234"},
  1001: { id: 1001, email: "me2@mail.com", password: bcrypt.hashSync("1234", saltRounds)},
  1002: { id: 1002, email: "me3@mail.com", password: "1234"},
}

const templateVars = {}
app.use((req, res, next )=>{
  const username = req.cookies["username"]
  // const id = req.cookies["user_id"]
  const id = req.session["user_id"]
  const user = getUserWithId(id, users)
  templateVars["username"] = username
  templateVars["user"] = user
  next()
  // res.render("index", templateVars)
})
app.get("/", (req, res)=>{
  // const username = req.cookies["username"]
  // const templateVars = {username}
  res.render("index", templateVars)
})

// Browse - list of all the items on a articular resource
app.get("/songs", (req, res) => {
  const username = req.cookies["username"]
  // const id = req.cookies["user_id"]
  const id = req.session["user_id"]
  const user = getUserWithId(id, users)
  // if(username) {
  if(user) {
    // const templateVars = { songs, username }
    const templateVars = { songs, username,  user }
    res.render("songs_index", templateVars)
  } else {
    res.status(402).send("not allowed")
  }
})

// get that servers us the form
app.get("/songs/new", (req, res)=> {
  res.render("song_new", templateVars)
})

//  GET EDIT FORM
app.get("/songs/:id/edit", (req, res) => {
  // const templateVars = {song}
  const user_id = req.session["user_id"]
  const user = getUserWithId(user_id, users)
  if(user){
    const id = req.params.id
    const song = songs[id]
    templateVars["song"] = song
    res.render("song_edit", templateVars)
  } else {
    res.status(401).send("not allowed")
  }
})

// POST EDIT FORM - UPDATE
app.post("/songs/:id/edit", (req, res) => {
  const id = req.params.id
  const {title, author, description} = req.body
  const new_song = {id, title, author, description}
  songs[id] = new_song
  res.redirect(`/songs/${id}`)
})

// Read - get one item to display based on ID
app.get("/songs/:id",(req, res)=>{
  const id = req.params.id
  const song = songs[id]
  // const templateVars = {song}
  templateVars["song"] = song
  res.render("song_show", templateVars)
})

// Add - POST - SONGS
app.post("/songs", (req, res)=>{
  const {title, author, description} = req.body
  const id = generateID()
  const song = { id, title, author, description }
  songs[id] = song
  res.redirect("/songs")
})

// Delete - deleting a resource
app.post("/songs/:id", (req, res) => {
  const id = req.params.id
  delete songs[id]
  res.redirect("/songs")
})

app.post("/login", (req, res) => {
  // const username = req.body.username
  // res.cookie("username", username)
  const {email, password} = req.body
  const user = authenticateUser(email, password, users)
  if (user) {
    // res.cookie("user_id", user.id)
    req.session.user_id = user.id;
    res.redirect("/songs")
  } else {
    res.status(401).send("wrong username or password")
  }

})
app.post("/logout", (req, res) => {
  // res.clearCookie("username")
  // res.clearCookie("user_id")
  req.session = null
  res.redirect("/")
})

app.get("/login", (req, res) => {
  res.render("login", templateVars)
})

app.post("/register", (req, res) => {
  const id = uuidv4().slice(0,4)
  const {email, password} = req.body
  const hashedPassword = bcrypt.hashSync(password, saltRounds)
  const user = {id, email, password: hashedPassword}
  users[id] = user
  // res.cookie("user_id", id)
  req.session.user_id = user.id;
  res.redirect("/songs")
})
app.get("/register", (req, res) => {
  res.render("register", templateVars)
})
app.get("/users", (req, res) => {
  // const id = req.cookies["user_id"]
  // const user = getUserWithId(id, users)
  // if (user){
  //   res.send({users})
  // } else {
  //   res.status(401).send("not authorised")
  // }
  res.send({users})
})

app.listen(port, ()=> console.log(`server listening on port: ${port}`))