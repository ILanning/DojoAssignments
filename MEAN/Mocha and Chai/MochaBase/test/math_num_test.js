var chai = require("chai");
var expect = chai.expect;
var MathNum = require("../math_num.js");  // Make sure this is pointing to the correct file!
describe("MathNum", function () {
    it("can be initialized with value, with default value of 0", function () {
        var num = new MathNum(6);
        expect(typeof num.value).to.equal("number");
        expect(num.value).to.equal(6);
        num = new MathNum();
        expect(typeof num.value).to.equal("number");
        expect(num.value).to.equal(0);
    });
    describe("#val()", function () {
        it("returns the number value", function () {
            var num = new MathNum();
            expect(typeof num.val()).to.equal("number");
            expect(num.val()).to.equal(0);
        });
    });
});
