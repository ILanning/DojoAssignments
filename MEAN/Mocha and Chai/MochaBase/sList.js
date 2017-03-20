module.exports = sList;
function sList(){
  var Node = function(val, node){
    this.val = val;
    this.next = node;
  }

  this.head = null;

  this.first = function(){
    if(this.head)
      return this.head.val;
    return null;
  };

  this.addFront = function(value){
    this.head = new Node(value, this.head);
  };

  this.popFront = function(){
    if(this.head){
      let result = this.head.val;
      this.head = this.head.next;
      return result;
    }
    return null;
  };

  this.popBack = function(){
    if(!this.head)
      return null;
    if(!this.head.next){
      let result = this.head.val;
      this.head = null;
      return result;
    }
    let curr = this.head;
    while (curr.next.next){
      curr = curr.next;
    }
    let result = curr.next.val;
    curr.next = null;
    return result;
  };

  this.length = function(){
    if(!this.head)
      return 0;
    var curr = this.head;
    var result = 1;
    while(curr.next){
      curr = curr.next;
      result++;
    }
    return result;
  };

  this.toArray = function(){
    if(!this.head)
      return [];
    var curr = this.head;
    var result = [];
    do{
      result.push(curr.val);
      curr = curr.next;      
    } while(curr);
    return result;
  };

  this.contains = function(value){
    if(!this.head)
      return false;
    var curr = this.head;
    do{
      if(curr.val === value)
        return true;
      curr = curr.next;
    } while(curr);
    return false;
  }
};
