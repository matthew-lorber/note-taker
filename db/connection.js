// dotenv for .env file
require("dotenv").config();
let mysql = require("mysql");
let connection;

// Local connection or Jaws when deployed to Heroku
// take out the ! when deploying
// if (!process.env.JAWSDB_URL) {
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.PW,
        database: "note_db"
    });
}

// Connecting to database
connection.connect(function(err) {
    if (err) {
        console.error(err);
    } else {
    console.log("sql server listening on port", connection.config.port);
    }
});

// Export the connection for use in api_routes.js
module.exports = connection;