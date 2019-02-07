const expect = require("chai").expect;
const reversify = require("../json_reversify.js");
const fs = require("fs");

describe("reversify", () => {
  it("Should reverse file", ()=> {
    let resultFile = fs.readFile(".test/json_files/outputs/t1_result.json", (err,data) => {
      try{
        let resultPromise = reversify("./test/json_files/inputs/t1.json");

        resultPromise.then((data) =>{
          console.log('Data is: ', data);
          let expectedResult = JSON.stringify(data);
        })
        .catch((err) => {
          throw (err);
        });
      } catch(err) {
        throw (err);
      } finally {
          expect(result).to.be.equal(expectedResult);
      }
    });
  });
});
