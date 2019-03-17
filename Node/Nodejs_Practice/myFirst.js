var http = require('http');
var dt = require('./myFirstModule');

http.createServer(function (req, res) { //create a server object
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url);
    res.write("The date and time are currently: " + dt.myDateTime()); //write a response to the client
    res.end('Hello World!');//end the response
}).listen(8080); //the server object listens on port 8080

