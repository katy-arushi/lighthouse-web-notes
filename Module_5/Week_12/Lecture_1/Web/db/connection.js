const {Client} = require('pg');

// browser <===> server <====> RDBMS(psql)

const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
};

const client = new Client(config);
client.connect();

module.exports = client;
