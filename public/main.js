

// get the note data from the inputs, save it to the db and update the view

// create a function to render the list of notes and read all notes from the database

// create a function to save (post) a new note

// create a function to delete the clicked note


document.getElementById("viewAll").addEventListener("click", () => {
    const connection = require('../db/connection.js');
    connection.query("SELECT * FROM notes", function(err, results) {
        if (err) console.error(err);
        console.log(server.state, "to SQL server on port", server.config.port, "as id", server.threadId);
        console.log("Here's all the notes from the database");
        console.table(results);
    });
});


document.getElementById("saveNote").addEventListener("click", () => {
    var key = $(".note-title").val();
    var value = $(".note-textarea").val();
    var insert = '<li class="list-group-item"><div><span class="font-weight-bold">';
        insert += key;
        insert += '</span><i class="fas fa-trash-alt float-right text-danger delete-note"></i></div><p class="mt-2">';
        insert += value;
        insert += '</p></li>';
    $(".list-group").append(insert);
    key = "";
    value = "";
});

