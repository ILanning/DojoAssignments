var chai = require("chai");
var expect = chai.expect;
var MathNum = require("../math_num.js");  // Make sure this is pointing to the correct file!
describe("MathNum", function () {
    it("can be initialized with value, with default value of 0", function () {
        let num = new MathNum(6);
        expect(typeof num.value).to.equal("number");
        expect(num.value).to.equal(6);
        num = new MathNum();
        expect(typeof num.value).to.equal("number");
        expect(num.value).to.equal(0);
    });
    describe("#val()", function () {
        it("returns the number value", function () {
            let num = new MathNum();
            expect(typeof num.val()).to.equal("number");
            expect(num.val()).to.equal(0);
        });
    });
    describe("#add(num)", function () {
        it("accepts a number and adds it to the original value", function () {
            let num = new MathNum();
            num.add(3);
            expect(num.val()).to.equal(3);
            num.add(4);
            expect(num.val()).to.equal(7);
            num.add(1);
            expect(num.val()).to.equal(8);
        });
        context("when passed negative numbers or zero", function () {
            it("adds them as expected", function () {
                let num = new MathNum();
                num.add(-4);
                expect(num.val()).to.equal(-4);
                num.add(0);
                expect(num.val()).to.equal(-4);
            });
        });
        context("when passed non-numbers", function () {
            it("does nothing", function () {
                let num = new MathNum(5);
                num.add("2");
                expect(num.val()).to.equal(5);
                num.add(false);
                expect(num.val()).to.equal(5);
                num.add({});
                expect(num.val()).to.equal(5);
            });
        });
        context("when passed an array", function () {
            it("adds every value in the array", function () {
                let num = new MathNum(4);
                num.add([2, 2]);
                expect(num.val()).to.equal(8);
                num.add([-3, -3]);
                expect(num.val()).to.equal(2);
                num.add(["Hello", 2]);
                expect(num.val()).to.equal(4);
            });
        });
    });
  describe("#multiply(num)", function (){
    it("multiplies the original value by it passed number", function (){
      let num = new MathNum(2);
      num.multiply(4);
      expect(num.val()).to.equal(8);
    });
    context("when given negative numbers or zero", function (){
      it("multiplies them as expected", function (){
        let num = new MathNum(2);
        num.multiply(-4);
        expect(num.val()).to.equal(-8);
        num.multiply(0);
        expect(num.val()).to.equal(0);
      });
    });
    context("when given non-numbers", function (){
      it("does nothing", function (){
        let num = new MathNum(3);
        num.multiply("test");
        expect(num.val()).to.equal(3);
        num.multiply({});
        expect(num.val()).to.equal(3);
      });
    });
    context("when passed an array", function (){
      it("multiplies the value by every value in the array", function (){
        let num = new MathNum(3);
        num.multiply([2, 3]);
        expect(num.val()).to.equal(18);
        num.multiply([{}, "test", 4]);
        expect(num.val()).to.equal(72);
      });
    });
  });
  describe("#power(num)", function (){
    // Include 2+ contexts, and 3+ descriptors ("it"s)
    it("raises the original value to the passed in power", function(){
      let num = new MathNum(2);
      num.power(3);
      expect(num.val()).to.equal(8);
    });
    context("when given negative numbers or zero", function (){
      it("raises them as expected", function (){
        let num = new MathNum(2);
        num.power(-2);
        expect(num.val()).to.equal(0.25);
        num.power(0);
        expect(num.val()).to.equal(1);
      });
      });
    context("when given non-numbers", function (){
      it("does nothing", function (){
        let num = new MathNum(2);
        num.power("test");
        expect(num.val()).to.equal(2);
        num.power({});
        expect(num.val()).to.equal(2);
      });
    });
    context("when passed an array", function (){
      it("raises the value by every value in the array conscutively", function (){
        let num = new MathNum(2);
        num.power([2, 3]);
        expect(num.val()).to.equal(64);
        num.power([{}, "test", 2]);
        expect(num.val()).to.equal(4096);
      });
    });
  });
  describe("#divide(num)", function(){
    it("divides the original value by the passed in number", function(){
      let num = new MathNum(60);
      num.divide(3);
      expect(num.val()).to.equal(20);
      num.divide(-4);
      expect(num.val()).to.equal(-5);
    });
    context("when given zero", function(){
      it("throws an error", function(){
        let num = new MathNum(20);
        expect(function(){ num.divide(0); }).to.throw("Cannot divide by zero");
        num = new MathNum(0);
        expect(function(){ num.divide(2); }).to.throw("Cannot divide by zero");
      });
    });
    context("when given non-numbers", function (){
      it("does nothing", function (){
        let num = new MathNum(3);
        num.divide("test");
        expect(num.val()).to.equal(3);
        num.divide({});
        expect(num.val()).to.equal(3);
      });
    });
    context("when passed an array", function (){
      it("divides the value by every value in the array", function (){
        let num = new MathNum(120);
        num.divide([2, 3]);
        expect(num.val()).to.equal(20);
        num.divide([{}, "test", 4]);
        expect(num.val()).to.equal(5);
      });
    });
  });
  describe("#round()", function(){
    it("rounds things over .5 up", function(){
      let num = new MathNum(4.6);
      num.round();
      expect(num.val()).to.equal(5);
      num = new MathNum(-4.4);
      num.round();
      expect(num.val()).to.equal(-4);
    });
    it("rounds things .5 or under down", function(){
      let num = new MathNum(4.5);
      num.round();
      expect(num.val()).to.equal(4);
      num = new MathNum(-4.5);
      num.round();
      expect(num.val()).to.equal(-5);
    });
    it("leaves whole numbers alone", function(){
      let num = new MathNum(4);
      num.round();
      expect(num.val()).to.equal(4);
    });
  });
  describe("#absoluteValue()", function(){
    it("leaves positive numbers and zero alone", function(){
      let num = new MathNum(5);
      num.absoluteValue();
      expect(num.val()).to.equal(5);
      num = new MathNum(0);
      num.absoluteValue();
      expect(num.val()).to.equal(0);
    });
    it("makes negative numbers positive",  function(){
      let num = new MathNum(-5);
      num.absoluteValue();
      expect(num.val()).to.equal(5);
    });
  });
});
