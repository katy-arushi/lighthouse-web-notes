const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 8081;

const posts = require('./data/posts.json');

app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(express.static('public'));

const genRandomId = () => {
    return Math.floor(Math.random() * 10000) + 1;
  };
  
app.get('/api/posts', (req, res) => {
    res.json(posts);
})

app.post('/api/posts', (req, res) => {
    const id = genRandomId();
    const title = req.body.title;
    const body = req.body.body;
  
    const post = {
      id,
      title,
      body
    };
    posts.push(post);
  
    res.status(201).json(post);
  });

app.listen(port, () => {
    console.log(`app is listening at ${port}`);
})