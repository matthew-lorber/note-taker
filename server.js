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

router.post("/new", function(req, res) {
    const query = "INSERT INTO notes (id, title, body) VALUES ('"+ req.body.id + "','" + req.body.title + "','" + req.body.note + "');";
    connection.query(query, function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

router.delete("/delete", function(req, res) {
    const query = "DELETE FROM notes WHERE id=" + req.body.id;
    connection.query(query, function(err, result) {
        if (err) throw err;
        res.json(result);
    });
});

router.get("/view", (req, res) => {
    connection.query("SELECT * FROM notes", (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});


app.use(express.static("public"));
app.listen(PORT);
console.log("express server listening on", PORT);