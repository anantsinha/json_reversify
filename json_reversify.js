const fs = require('fs');
const readJsonFile = require("./test/readJsonFile.js");

// takes file path, returns reversed json
const reversify = async (path) => {
	// TODO: complete function definition
	return readJsonFile(path);
}

module.exports = reversify;
