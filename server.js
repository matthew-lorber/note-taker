const server = require("./connection.js");
server.connection();

// TODO: Mount your HTML and API routes
// https://expressjs.com/en/api.html#app.use

/* ALL TOGETHER, FINAL */
const http = require('http');
var PORT = process.env.PORT || 8080;
http.createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request.on('error', (err) => {
      console.log('error', err);
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        response.on('error', (err) => {
            console.error(err.stack);
        });
        response.statusCode = 200;
        response.writeHead(200, {'Content-Type': 'application/json'})
        const responseBody = { headers, method, url, body };
        response.write(JSON.stringify(responseBody));
        //response.end('<html><body>Hello there, user</body></html>');
        response.end(JSON.stringify(responseBody));
    });
}).listen(PORT);

console.log('listening on port', PORT);
