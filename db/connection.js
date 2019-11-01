/* CONNECTION */

// exports.connections = () => {
//   console.log('reached connections.js');
//   connection = require('mysql').createConnection({
//     host: keys.server.host,
//     port: keys.server.port,
//     user: keys.server.user,
//     password: process.env.password,
//     database: keys.server.database
//   });
// }
  /*
  var connection;

  if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    require("dotenv").config();
    const keys = require("../keys");
    const mysql = require("mysql");
    connection = mysql.createConnection({
      host: keys.server.host,
      port: keys.server.port,
      user: keys.server.user,
      password: process.env.password,
      database: keys.server.database
    });
  }

  connection.config.typeCast = function(field, next) {
    if (field.type == "TINY" && field.length == 1) {
      return field.string() == "1"; // 1 = true, 0 = false
    }
    return next();
  };

  console.log('database served');
}
*/
// module.exports = connections;
