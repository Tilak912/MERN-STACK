var http = require('http');

    // Working with HTTP:-)

http.createServer(function (req, res) { //create a server object
    res.writeHead(200, { 'Content-Type': 'text/html' }); //HTTP header
    res.write(req.url);
    res.end('Hello World!');//end the response
}).listen(8080); //the server object listens on port 8080

