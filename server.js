// Load Express middleware 
const express = require("express");
const router = express.Router();
const connection = require("./db/connection.js");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(router);

router.post("/new", function(req, res) {console.log("hit add new note route");
    const query = "INSERT INTO notes (title, body) VALUES ('"+ req.body.title.toString() + "','" + req.body.note.toString() + "');";
    connection.query(query, function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});
app.use(express.static("public"));

app.listen(PORT);
console.log("express server listening on", PORT);

// Export the middleware so other modules can use it
// exports.app = app;
// exports.express = express;
// exports.connection = connection;
// exports.router = router;

//console.log(module.filename); console.log(module.id); console.log(module.exports);