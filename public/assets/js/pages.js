exports.pages = () => {

    pages = () => {

        const PORT = process.env.port1 || 8080;
        require('http').createServer(function(request, response) {
            
            if (request.url === "/index" || request.url === "/") {
                var file = "./public/index.html";
            } else {
                var file = "./public/notes.html";
            }

            require('fs').readFile(file, (err, data) => {
                handler(err, data, response);
                response.end();
            });
            
        }).listen(PORT);

        handler = (err, data, response) => {
            if (err) { 
                failure(err, response); 
            }
            else { 
                success(data, response); 
            }
        }

        success = (data, response) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        }

        failure = (err, response) => {
            response.writeHead(404);
            response.write("<html><body><h1>404</h1><br>" + err.stack + "</body></html>");
            response.end();
        }
    console.log('HTTP on', PORT);
    }
}