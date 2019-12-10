// Load Express middleware 
const express = require("express");
const router = express.Router();
const connection = require("./db/connection.js");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);

router.post("/new", function(req, res) {console.log("hit add new note route");
console.log(req);
    connection.query("INSERT INTO notes SET ?", [req.body.title], function(err, result) {
        // rigth here figure out req.body.title and req.body.body PLACE INTO DATABASE
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