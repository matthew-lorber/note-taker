/* CONNECTION */
require("dotenv");
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Lisinopril1!",
        //password: process.env.PASSWORD,
        database: "note_db"
    });
}
console.log("Database server spooled up on port", connection.config.port);
module.exports = connection;