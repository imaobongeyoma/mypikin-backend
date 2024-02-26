require("dotenv").config();
const mysql = require('mysql2')
const db = mysql.createConnection ({
    host: process.env.DB_HOST,
    database: process.env.DB_LOCAL_DBNAME,
    user: process.env.DB_LOCAL_USER,
    password: process.env.DB_LOCAL_PASSWORD,
});
module.exports = { db };