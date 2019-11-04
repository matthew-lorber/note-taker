/* CREATE HTTP SERVER, LISTEN */
require('dotenv').config();
const fs = require('fs');
const PORT = process.env.port0;
const http = require('http');
const server = http.createServer(handler);
server.listen(PORT, function() {
console.log('listening on http://localhost:', PORT);
});

/* RESPONSE HANDLER */
function handler(req, res) {
    let page = req.url;
    let type = "html";
    console.log(page);
    if (page === "/") { page += "index.html";}
    else if (page === "/assets/css/style.css") { type = "css"; }
    fs.readFile(__dirname + page, function(err, data) {
        if (err) {console.log(err)}
        res.writeHead(200, {"Content-Type":"text/" + type});
        res.end(data);
    });
};


