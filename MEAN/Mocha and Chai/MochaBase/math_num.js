module.exports = MathNum;
function MathNum (init){
  if(init === undefined)
    init = 0;
  this.value = init;
  this.val = function(){
    return this.value;
  }

  this.add = function(num){
    if(typeof num === "number")
      this.value += num;
    else if(num instanceof Array){
      for(let i = 0; i <num.length; i++ )
        this.add(num[i]);
    }
  }

  this.multiply = function(num){
    if(typeof num === "number")
      this.value *= num;
    else if(num instanceof Array){
      for(let i = 0; i <num.length; i++ )
        this.multiply(num[i]);
    }
  }

  this.divide = function(num){
    if(typeof num === "number"){
      if(num == 0 || this.value == 0)
        throw new Error("Cannot divide by zero");
      this.value /= num;
    }
    else if(num instanceof Array){
      for(let i = 0; i <num.length; i++ )
        this.divide(num[i]);
    }
  }

  this.power = function(num){
    if(typeof num === "number"){
      if(num === 0){
        this.value = 1;
        return;
      }
      let valOriginal = this.value;
      absoluteNum = Math.abs(num);
      for(let i = 1; i < absoluteNum; i++)
        this.value *= valOriginal;
      if(num < 0)
        this.value = 1 / this.value;
    }
    else if(num instanceof Array){
      for(let i = 0; i <num.length; i++ )
        this.power(num[i]);
    }
  }

  this.round = function(){
    let decimal = this.value % 1;
    if(decimal > 0.5)
      this.value++;
    else if (decimal <= -0.5)
      this.value--;
    this.value -= decimal;
  }

  this.absoluteValue = function(){
    if(this.value < 0)
      this.value *= -1;
  }
}
