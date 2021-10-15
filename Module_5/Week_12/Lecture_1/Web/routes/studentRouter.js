const express = require('express')
const router = express.Router();

const {getAllStudents, getStudentById} = require('./../db/studentQueries')


router.get('/', (req, res) => {
    getAllStudents()
    .then(students => res.json(students));
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    getStudentById(id)
    .then(student => res.json(student));
});

module.exports = router;