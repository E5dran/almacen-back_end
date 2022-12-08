const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'MySQLchandrian7',
    port: '3306',
    database: 'proyecto_almacen'
});

global.db = pool.promise();