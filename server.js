const express = require("express");
const api_routes = require("./routes/api_routes");
const html_routes = require("./routes/html_routes");
require("./db/connection.js");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(api_routes);
app.use(html_routes);
app.listen(PORT);
console.log("express server listening on", PORT);

module.exports = app;