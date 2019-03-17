// var http = require('http');

    // Working with HTTP:-)

// http.createServer(function (req, res) { //create a server object
//     res.writeHead(200, { 'Content-Type': 'text/html' }); //HTTP header
//     res.write(req.url);
//     res.end('Hello World!');//end the response
// }).listen(8080); //the server object listens on port 8080

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    console.log(filename);
    fs.readFile('demofile1.html', function (err, data) {
       if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);