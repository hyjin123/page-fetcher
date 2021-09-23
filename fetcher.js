const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

//request data from the first input which is an URL
request(args[0], (error, response, body) => {
  let stats = fs.statSync(args[1]);
  let fileSize = stats.size;
  fs.writeFile(args[1], body, err => {
    if (err) console.log(err);
    console.log(`Downloaded and saved ${fileSize} bytes to ${args[1]}`);
    })
});

// console.log(Downloaded and saved 3261 bytes to ./index.html)