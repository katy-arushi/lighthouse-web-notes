const express = require('express')
const router = express.Router();

const {getAllBooks, getBookById} = require('./../db/bookQueries')

router.get('/', (req, res) => {
    getAllBooks(books => {
        res.json(books);
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    getBookById(id)
    .then(book => res.json(book));
});

module.exports = router;