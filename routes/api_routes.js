var router = require("express").Router();
var connection = require("../db/connection");

router.get("/notes", function(req, res) {
  connection.query("SELECT * FROM notes", function(err, dbnewNote) {
    if (err) throw err;

    res.json(dbnewNote);
  });
});

router.post("/new", function(req, res) {
  console.log("got to new api route");
  connection.query("INSERT INTO notes SET ?", [req.body], function(err, result) {
    if (err) throw err;

    res.json(result);
  });
});

router.put("/new/:id", function(req, res) {
  console.log("got to new put route");
  connection.query("UPDATE notes SET ? WHERE id = ?", [req.body, req.params.id], function(err, result) {
    if (err) throw err;

    res.json(result);
  });
});

module.exports = router;