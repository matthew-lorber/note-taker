const express = require("express");
const router = express.Router();
const connection = require("./db/connection.js");
// const notes = require("./public/assets/js/notes.js");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
// app.use(notes);
app.listen(PORT);
console.log("express server listening on", PORT);

// Export the middleware so other modules can use it
exports.app = app;
exports.express = express;
exports.connection = connection;
exports.router = router;

//console.log(module.filename); console.log(module.id); console.log(module.exports);