const fs = require("fs")

const printData = (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data)
}

fs.readFile("./breakfastMenu.txt", "utf8", printData)

console.log("This is the breakfast!")

