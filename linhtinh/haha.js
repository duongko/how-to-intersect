var fs = require('fs');//file system
var content = fs.readFile('abc.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`du lieu doc duoc ${data}`);
    }
});
console.log(content);
console.log("bye");