import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
    host: 'assdfgg',
    user: 'asdgg',
    password: 'asdfg',
    database: 'catalogoFilmesDB'
});