var http = require("http");
var fs = require("fs");


                    //Working with File System:-)

    //Read Files
// http.createServer( (req, res) => {
//     fs.readFile('demofile1.html', function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         res.end();
//     });
// }).listen(8080);


    //Append File
// fs.appendFile('AppendedFile.txt', 'Yay!,I have nothing to do.', (err) => {
//     if (err) throw err;
//     console.log("File created");
// });

    //Open File

// fs.open('mynewfile1.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

    //Write File
// fs.writeFile('mynewfile2.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

    //Deleting File
// fs.unlink('mynewfile2.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });

    //Rename file

fs.rename('mynewfile1.txt', 'myrenamedfile1.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});