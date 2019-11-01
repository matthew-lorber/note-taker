/* MAIN */
require('dotenv').config();
require('fs');
require("./assets/js/pages.js").pages();
pages();
// get the note data from the inputs, save it to the db and update the view

// create a function to render the list of notes and read all notes from the database

// create a function to save (post) a new note

// create a function to delete the clicked note
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: process.env.host,
    port: process.env.port0,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

connection.query("SELECT * FROM notes", function(err, results) {
    if (err) console.error(err);
    console.log("\nHere's what we have on offer");
    console.table(results);
});


