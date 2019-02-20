const expect = require("chai").expect;
const reversify = require("../json_reversify.js");
const readJsonFile = require("./readJsonFile");
const fs = require("fs");

describe("reversify", () => {
  it("Should reverse file", async ()=> {
      let result = "";
      let expectedResult = "";

      try{
          result = await reversify("./test/json_files/inputs/t1.json");
            expectedResult = await readJsonFile("./test/json_files/outputs/t1.json");
      } catch(err) {
        throw (err);
      } finally {
          expect(result).to.equal(expectedResult);
      }
  });
});
