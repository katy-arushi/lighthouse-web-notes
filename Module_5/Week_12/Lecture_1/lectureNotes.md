### Node-Postgres Intro
node-postgres
`npm install pg`

browser <===> server <===> RDBMS

- in this scenario, server is a client of RBDMS, and is the server of browser
- browser is a client of the server

### Node-Postgres Setup
```js
const {Client} = require('pg');
const config = {
  user: 'vagrant',
  host: 'localhost',
  database: 'onlineLibrary',
  password: 'secret',
  port: 5432, // default port for psql
};

const client = new Client(config);
client.connect();

const verb = process.argv[2]; // get the CRUD verb that the user typed

switch(verb){
  case 'browse':
    client.query('SELECT * FROM books;', (err, res) => {
      console.log(err, res);
      // rows is the information, an array of objects
      console.log(res.rows[0]);
      client.end(); // end needs to be inside the callback, so it's executed async because client.query is async, while client.end is sync
        // when the response is ready, then the callback will be executed, so then connection can be ended
    })
    break;
  
  case 'read':
    const id = process.argv[3];
    // vulnerable to SQL injection attack
    client.query(`SELECT * FROM books WHERE id = ${id}`, (err, res) => {
      console.log(res.rows[0]);
      client.end();
    });

    // prevents against injection attack
    // feature from psql
    // syntax means, get the first element of this array and replace it here - also a PROMISE
    client.query("SELECT * FROM books WHERE id = $1", [id]) // parameter array
    .then(response => {
      console.log(response.rows[0]);
      client.end();
    })
    break;
  
  default:
    console.log("not a proper verb");
    client.end();
    break;
}
```

- can use either pool or client
  - pool is a collection of clients, more common in production code

#### SQL Injection Attack
- from command line, `read '9; DROP TABLE borrowings;'`
- important to prevent this
- never trust the user!
- don't use the template literal

### Making a Server for the Browser

`const port = process.env.PORT || 8081;`

dotenv loads a file (.env) that can hold our environment variable keys for accessing db. Those environment variables only load on runtime.

.gitignore our .env file We name these variables in our .envs which we can then call inside db client JS file.

#####To share with other devs
We do push a .env example file to our repo that holds the environment variable KEYS, NOT THE VALUES, and the other devs have to fill those in themselves

