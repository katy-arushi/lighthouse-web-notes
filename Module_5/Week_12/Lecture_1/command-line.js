const {Client} = require('pg');

// browser <===> server <====> RDBMS(psql)

const config = {
    user: 'vagrant',
    host: 'localhost',
    database: 'onlinelibrary',
    password: 'secret',
    port: 5432,
};

const client = new Client(config);
client.connect();

const verb = process.argv[2];
let id;

console.log(process.argv);

switch(verb){
    case 'browse':
        client.query('SELECT * FROM books;', (err, res) => {
            console.log(res.rows);
            client.end();
        });
        break;

    case 'read':
        id = process.argv[3];
        // client.query(`SELECT * FROM books WHERE id = ${id}` , (err, res) => {
        //     console.log(res.rows[0]);
        //     client.end();
        // })
        client.query("SELECT * FROM books WHERE title = $1", [id])
        .then(response => {
            console.log(response.rows);
            client.end();
        })
        break;


    case 'delete':
        id = process.argv[3];
        client.query("DELETE FROM books WHERE id = $1", [id])
        .then(response => {
            console.log(response.rows);
            client.end();
        });
        break;


    case 'edit':
        id = process.argv[3];
        const newTitle = process.argv[4];
        client.query("UPDATE books SET title = $1 WHERE id = $2 returning *", [newTitle, id])
        .then(response => {
            console.log(response.rows);
            client.end();
        })
        break;

    case 'add':
        const title = process.argv[3];
        const author_id = process.argv[4];
        const id = process.argv[5];
        client.query("INSERT INTO books (id, title, author_id) VALUES ($1, $2, $3) returning *", [id, title, author_id])
        .then(response => {
            console.log(response);
            client.end();
        })
        break;

    default:
        console.log("Not a proper verb");
        client.end();
        break;
}




