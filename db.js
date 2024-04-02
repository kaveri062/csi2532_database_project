// db.js
const { Client } = require('pg');
const client = new Client({
    user: 'group_csi',
    host: 'localhost',
    database: 'hotel_chain',
    password: 'password',
    port: 5432,
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err));

module.exports = client;
