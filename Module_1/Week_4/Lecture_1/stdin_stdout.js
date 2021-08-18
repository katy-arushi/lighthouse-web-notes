const readline = require("readline")
const fs = require("fs")



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Which Menu you want to see? ', (answer) => {
    // TODO: Log the answer in a database
    fs.readFile(answer, "utf8", (err, data) => {
        if(err) {
            throw err;
        }
        console.log(data)
    })
  
    rl.close();
  });