let fs = require('fs')
const path = require('path')
console.log("Hello I am from test-print-hello")
console.log('Post commit');
fs.createWriteStream(`${__dirname}/test.txt`);
console.log('Created file location '+`${__dirname}/test.txt`);
