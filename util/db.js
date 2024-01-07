const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 1000,
    host: "localhost",
    user: "root",
    password: "tPeaced27@mysql",
    database: "nextjs-mysql-auth"
})

export default pool;