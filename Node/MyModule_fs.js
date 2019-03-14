var fs = require('fs');

//Working with files

// var read = fs.readFile('one.txt', 'utf8', (err, data) => {
//     // console.log(data);
//     // console.log(err);
//     fs.writeFile('second.txt', data, (err,data) => {
//         if(err) throw err;
//         else console.log(data);
//     });
// });

// console.log('Async at work!!');


//Working with directory


// fs.mkdir('mydir', (err) => {
//     if(err) throw err;
// });

fs.unlink("second.txt", () => {})