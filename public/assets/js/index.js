/* CREATE SERVER, LISTEN */
const http = require('http');
const fs = require('fs');
const PORT = 8080;
const server = http.createServer(handler);
server.listen(PORT, function() {
    console.log('listening on http://localhost:', PORT);
});

/* SWITCH RESPONSE */
function handler(req, res) {
    console.log(req.url);
    switch (req.url) {
        case "/":
            return goRoot(res);
        case "/notes.html":
            return goNote(res);
        default:
            return go404(res);
    }
};
/* PAGE SELECTING */
goRoot = (res) => {
    fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) throw err;
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
    });
}
goNote = (res) => {
    fs.readFile(__dirname + "/notes.html", function(err, data) {
        if (err) throw err;
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
    });
}
go404 = (res) => {
    const HTML = '<html><body>404 Not Found</body></html';
    res.writeHead(404, {"Content-Type":"text/html"});
    res.end(HTML);
}