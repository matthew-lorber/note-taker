// exports.server = {
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: process.env.password,
//   database: "bamazon"
// }

exports.connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.password,
  database: "note_db"
});