const { Pool } = require("pg");

// Link to ElephantSQL DB
const PG_URI = process.env.DB_KEY;


// Establish connection to DB
const pool = new Pool({
  connectionString: PG_URI,
});


// Query to DB
module.exports = {
  query: (text, params, callback) => {
    console.log("Executed query", text);
    return pool.query(text, params, callback);
  },
};

/* 
CREATE TABLE user_info (
user_id serial PRIMARY KEY,
username VARCHAR ( 50 ) UNIQUE NOT NULL,
password VARCHAR ( 50 ) NOT NULL,
email VARCHAR ( 255 ) UNIQUE NOT NULL,
passwordHash VARCHAR ( 4000 ) UNIQUE,
passwordSalt VARCHAR ( 4000 ) UNIQUE
);
*/