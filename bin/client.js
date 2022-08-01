// imports
require('dotenv').config()
const { Pool } = require('pg')

// database
const databaseConnectionPool = new Pool({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});

module.exports = {
    query: async (text, params) => {
        return await databaseConnectionPool.query(text, params)
    },
}