const client = require('./connection')

// using a callback 
const getAllBooks = (callback) => {
    client.query('SELECT * FROM books;', (err, res) => {
        callback(res.rows);
    });
};


// using a promise
const getBookById = (id) => {
    console.log(`inside book queries, id: ${id}`)
    return client.query("SELECT * FROM books WHERE id = $1", [id])
        .then(response => {
            return response.rows[0];
        })
};

module.exports = {getAllBooks, getBookById}