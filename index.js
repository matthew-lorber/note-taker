/* CREATE HTTP SERVER, LISTEN */
require('dotenv').config();
var fs = require('fs');
var PORT = process.env.port0;
var http = require('http');
var server = http.createServer(handler);
server.listen(PORT, function() {
console.log('listening on http://localhost:', PORT);
});

/* RESPONSE HANDLER */
function handler(req, res) {
    var page = req.url;
    var type = "html";
    console.log(page);
    if (page === "/") { page += "index.html";}
    else if (page === "/assets/css/style.css") { type = "css"; }
    fs.readFile(__dirname + page, function(err, data) {
        if (err) {console.log(err)}
        res.writeHead(200, {"Content-Type":"text/" + type});
        res.end(data);
    });
};

/* DEFINE SQL DATABASE */
var PORT1 = process.env.port1;
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: process.env.host,
    port: PORT1,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

/* START SQL DATABASE */
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to SQL on", PORT1);
});



// create a function to save (post) a new note
// get the note data from the inputs, save it to the db and update the view
function loadListener0() {
    document.getElementById("saveNote").addEventListener("click", () => {
        const savenotes = require("./savenotes.js");
        savenotes.saveNote();
    });
}




// create a function to delete the clicked note

// create a function to render the list of notes and read all notes from the database
function loadListener1() {
    document.getElementById("viewAll").addEventListener("click", () => {
        const readnotes = require("./readnotes.js");
        readnotes.showAll();
    });
}