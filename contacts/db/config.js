require('dotenv').config();
const DB_CONFIG = process.env.DB_CONFIG || 'postgresql://contactsdb:passwdb@postgresql:5432/sampledb';
const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});
  
module.exports = { pgconn }
