exports.pages = () => {

    pages = () => {
        
        const PORT = process.env.port1 || 8080;
        var file, type;
        require('http').createServer(function(request, response) {
            
            if (request.url === "/index" || request.url === "/") {
                file = "./index.html"; console.log("htmlxxx");
                type = "html";
            } else if (request.url === "/notes") {
                file = "./notes.html"; console.log("htmlxxx");
                type = "html";
            } else if (request.url.toString().indexOf(".css") >= 0) {
                file = "./style.css"; console.log("csss");
                type = "css";
            }

            require('fs').readFile(file, (err, data) => {
                handler(err, data, response, type);
                response.end();
            });
            
        }).listen(PORT);

        handler = (err, data, response, type) => {
            if (err) { 
                failure(err, response); 
            }
            else { 
                success(data, response, type); 
            }
        }

        success = (data, response, type) => {
            response.writeHead(200, {'Content-type' : 'text/css'});
            if (type === 'html') {
                response.write(data);
            } else {
                var fileStream = fs.createReadStream(cssPath, "UTF-8");
                response.writeHead(200, {"Content-Type": "text/css"});
                fileStream.pipe(data);
            }           
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