const { Client } = require('pg');

const client = new Client({
    user: 'dimarch_pg',
    host: 'localhost',
    database: 'volunteer_db',
    password: '123',
    port: 3333,
});

client.connect();

module.exports = client;