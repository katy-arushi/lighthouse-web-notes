const client = require('./connection');

const getAllStudents = () => {
    return client.query("SELECT * FROM students;")
    .then(response => {
        return response.rows;
    });
};

const getStudentById = (id) => {
    return client.query("SELECT * FROM students WHERE id = $1", [id])
    .then(response => {
        return response.rows[0];
    });
};


module.exports = {getAllStudents, getStudentById}