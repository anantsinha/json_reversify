const fs = require('fs');
const readJsonFile = require("./readJsonFile");
// takes file path, returns reversed json
const reversify = async (path) => {
	let toReverse = await readJsonFile(path);
	let start = toReverse.indexOf('[');
	toReverse = toReverse.slice(start);
	let result = "";
	let firstRun = true;
	do {
		let objStart = toReverse.indexOf('{');
		let objEnd = toReverse.indexOf('}');
        firstObj = toReverse.slice(objStart, objEnd+1);
        toReverse = toReverse.slice(objEnd+1);
        if (!firstRun && firstObj.length!=0)
        	result = "\t\t"+firstObj + ",\n" + result;
        else {
            result = "\t\t" + firstObj + "\n" + result;
            firstRun = false;
        }
	} while(firstObj.length!=0);  // end when there is no new object to read
	writeToOutput(result);
}

function writeToOutput (to_write){
	let prefix = "{\n \"result\": [";
	let suffix = "]\n}";
	to_write = prefix + to_write + suffix;
	fs.writeFile("./reversed.json", to_write, (err) => {
		if(err){
			throw err;
		}
	});
}
module.exports = reversify;