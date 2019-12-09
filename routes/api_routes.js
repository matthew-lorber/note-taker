const router = require("express").Router();
const connection = require("../db/connection");

router.get("/notes", function(req, res) {console.log("hit read all notes route");
  connection.query("SELECT * FROM notes", function(err, dbnewNote) {
    if (err) throw err;

    res.json(dbnewNote);
  });
});



router.put("/new/:id", function(req, res) {console.log("got to new put route");
  connection.query("UPDATE notes SET ? WHERE id = ?", [req.body, req.params.id], function(err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;