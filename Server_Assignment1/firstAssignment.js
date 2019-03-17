var http = require('http');
var fs = require('fs');

http.createServer( (req,res) => {
    fs.readFile('demoHTML.html', (err,data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        if(err) throw err;
        res.write(data);
        // console.log(data);
        res.end();
    });
} ).listen(1010);