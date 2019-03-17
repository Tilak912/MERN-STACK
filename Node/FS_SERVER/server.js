var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log(req.url + "is expecting a response.");
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    var myReadStream = fs.createReadStream(__dirname + '/readme.txt');
    // res.end('Hi! This is my first server response!!')
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log("Listening to localhost 3000");

// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe2.txt');

// myReadStream.pipe(myWriteStream);
//   OR
// myReadStream.on('data', (datablock) => {
//     console.log('Incoming data block!!');
//     myWriteStream.write(datablock);
    // console.log(datablock);
// })
