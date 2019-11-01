/* ENVELOPE */
require('dotenv').config();

/* CONNECTS HTML */
require("./pages.js").pages();

/* CONNECTS SERVER */
require("./server.js").server();

/* LAUNCH APPS */
pages();
server();

// get the note data from the inputs, save it to the db and update the view

// create a function to render the list of notes and read all notes from the database

// create a function to save (post) a new note

// create a function to delete the clicked note
