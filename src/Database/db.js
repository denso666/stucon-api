const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

async function getConnection() {
    try {
        const conn = await pool.getConnection(); 
        return conn;
    } catch (error) {
        console.log( error );
    }
}

module.exports = { getConnection };