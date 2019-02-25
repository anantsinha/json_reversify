const fs = require('fs');

// takes file path, returns reversed json
const readJsonFile = async (path) => {
    // TODO: complete function definition
    return new Promise ( (resolve, reject) => {
        let file = fs.readFile(path, 'utf8', (err,data) => {
            if (err) {
                reject(err);
            }
            else{
                resolve (data);
            }
        });
    });
}

module.exports = readJsonFile;
