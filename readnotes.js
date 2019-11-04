exports.readnotes = function() {

    var PORT1 = process.env.port1;
    var mysql = require("mysql");
    var connection = mysql.createConnection({
    host: process.env.host,
    port: PORT1,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
    });
    
    function showAll() {
        connection.query("SELECT * FROM notes", function(err, results) {
            if (err) console.error(err);
            console.log(server.state, "to SQL server on port", server.config.port, "as id", server.threadId);
            console.log("Here's all the notes from the database");
            console.table(results);
        });
    }
}