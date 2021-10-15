require('dotenv').config()

const express = require('express')
const bookRouter = require('./routes/bookRoutes')
const studentRouter = require('./routes/studentRouter')

const app = express();
const port = process.env.PORT || 8081;



app.use('/books', bookRouter);
app.use('/students', studentRouter);


app.get('/', (req, res) => {
    res.json("THIS IS HOMEPAGE!");
});

app.listen(port, () => {
    console.log(`The Server is Listening on port ${port}`);
})