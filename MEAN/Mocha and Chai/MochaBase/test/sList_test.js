SList = require("../slist.js");
var expect = require("chai").expect;

describe("sList", function(){
  it("can be instantiated", function(){
    var list = new SList();

  });
  describe("#addFront(value)", function(){
    it("adds the passed in value to the start of the list", function(){
      var list = new SList();
      list.addFront(5);
      expect(list.head.val).to.equal(5);
    });
    it("links what was the head to the new head", function(){
      var list = new SList();
      list.addFront(5);
      list.addFront(4);
      expect(list.head.next.val).to.equal(5);
    });
  });
  describe("#first()", function(){
    it("lets you view the first value", function(){
      var list = new SList();
      list.addFront(5);
      expect(list.first()).to.equal(5);
    });
    it("even when that value is null", function(){
      var list = new SList();
      expect(list.first()).to.equal(null);
    });
  });
  describe("#popFront(value)", function(){
    it("removes and returns the first value in the list", function(){
      var list = new SList();
      list.addFront(5);
      expect(list.popFront()).to.equal(5);
    });
    it("does not drop the rest of the list on removal", function(){
      var list = new SList();
      list.addFront(5);
      list.addFront(4);
      list.popFront();
      expect(list.first()).to.equal(5);
    });
    it("or returns null if the list was empty", function(){
      var list = new SList();
      expect(list.popFront()).to.equal(null);
    });
  });
  describe("#popBack(value)", function(){
    it("removes and returns the last value in the list", function(){
      var list = new SList();
      list.addFront(5);
      list.addFront(4);
      expect(list.popBack()).to.equal(5);
    });
    it("or returns null if the list was empty", function(){
      var list = new SList();
      expect(list.popBack()).to.equal(null);
    });
  });
  describe("#length()", function(){
    it("returns the number of nodes in the list", function(){
      var list = new SList();
      expect(list.length()).to.equal(0);
      list.addFront(5);
      expect(list.length()).to.equal(1);
      list.addFront(4);
      expect(list.length()).to.equal(2);
    });
  });
  describe("#toArray()", function(){
    it("returns an array of all values in the list", function(){
      var list = new SList();
      list.addFront(5);
      list.addFront(4);
      expect(list.toArray()).to.satisfy(function(arr){ return arrayEquality(arr, [4, 5]); });
    });
    it("returns an empty array if the list is empty", function(){
      var list = new SList();
      expect(list.toArray()).to.satisfy(function(arr){ return arrayEquality(arr, []); });
    });
  });
  describe("contains", function(){
    it("returns true if the item is in the list", function(){
      var list = new SList();
      list.addFront(5);
      list.addFront(4);
      list.addFront(3);
      expect(list.contains(4)).to.equal(true);
    });
    it("returns false if it is not", function(){
      var list = new SList();
      list.addFront(5);
      list.addFront(4);
      list.addFront(3);
      expect(list.contains(2)).to.equal(false);
    });
  });
});

function arrayEquality(arr1, arr2){
  if(!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length != arr2.length)
    return false;
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] != arr2[i])
      return false;
  }
  return true;
}
