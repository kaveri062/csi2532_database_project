const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'group_csi',
    port: 5432,
    password: 'password',
    database: 'Hotel_Chain'
});

client.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err))
    .finally(() => client.end());
