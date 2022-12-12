const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Lizarra1489@',
    port: '3306',
    database: 'proyecto_almacen'
});

global.db = pool.promise();