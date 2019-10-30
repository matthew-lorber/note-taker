// Load the API keys that are hidden in the .env file, which is listed in the .gitignore
require("dotenv").config();

// Retrieve the API keys from the .env
var keys = require("./keys.js");

var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", // FIXME: Establish a connection to your MySQL Database
    password: process.env.password, // https://www.npmjs.com/package/mysql#establishing-connections
    database: "note_db"
  });
}

connection.config.typeCast = function(field, next) {
  if (field.type == "TINY" && field.length == 1) {
    return field.string() == "1"; // 1 = true, 0 = false
  }
  return next();
};


module.exports = connection;
