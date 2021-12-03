const express = require('express');
const cors = require('cors');

const app = express();

const data = [
    {item: 'Get up',          done: false},
    {item: 'Read a book',        done: false},
    {item: 'Meditate/pray',        done: false},
    {item: 'Take daughter to school',  done: false},
];


app.use(cors());

app.get('/', (req,res) => {
    setTimeout( () => {
        res.json(data);
    }, 500)
})

app.listen(8080, () => console.log('Server is on 8080!'));