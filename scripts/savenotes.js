exports.savenotes = function() {

    var PORT1 = process.env.port1;
    var mysql = require("mysql");
    var connection = mysql.createConnection({
    host: process.env.host,
    port: PORT1,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
    });

    function saveNote() {
        var key = $(".note-title").val();
        var value = $(".note-textarea").val();
        var insert = '<li class="list-group-item"><div><span class="font-weight-bold">';
        insert += key;
        insert += '</span><i class="fas fa-trash-alt float-right text-danger delete-note"></i></div><p class="mt-2">';
        insert += value;
        insert += '</p></li>';
        $(".list-group").append(insert);
        var dB = "notes";
        var sql = ["INSERT INTO " + dB + " (title, body) VALUES (" + key + ", " + value + ")", "SELECT * FROM " + dB];
        for (var i=0; i<sql.length; i++) {
            connection.query(sql[i], function (err, result) {
                if (err) throw err;
                console.table(result);
            });
        }
    }
}