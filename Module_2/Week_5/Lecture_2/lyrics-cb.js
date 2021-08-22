// Write a program that reads files ( in data folder)
// and prints it in the correct order
// 🎶
const fs = require('fs');

fs.readFile('./data/file1.txt', 'utf8', (err, data) => {
    if (err) {
        throw new Error(err);
    } else {
        console.log(`🎶 ${data} 🎶`);
        fs.readFile('./data/file2.txt', 'utf8', (err, data) => {
            if (err) {
                throw new Error(err);
            } else {
                console.log(`🎶 ${data} 🎶`);
                fs.readFile('./data/file3.txt', 'utf8', (err, data) => {
                    if (err) {
                        throw new Error(err);
                    } else {
                        console.log(`🎶 ${data} 🎶`);
                        fs.readFile('./data/file4.txt', 'utf8', (err, data) => {
                            if (err) {
                                throw new Error(err);
                            } else {
                                if (err) {
                                    throw new Error(err);
                                } else {
                                    console.log(`🎶 ${data} 🎶`);
                                    fs.readFile('./data/file5.txt', 'utf8', (err, data) => {
                                        console.log(`🎶 ${data} 🎶`);
                                    })
                                }
                            }
                        })
                    }
                })
            }
        })
    }
});