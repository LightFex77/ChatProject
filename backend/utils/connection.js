const pg = require('pg')

const connection = new pg.Pool({
    user: 'postgres',
    password: 'admin123',
    database: 'chatServer',
    host: 'localhost',
    port: '5432'
});

module.exports = connection;