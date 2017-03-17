module.exports = MathNum;
function MathNum (init){
  if(init === undefined)
    init = 0;
  this.value = init;
  this.val = function(){
    return this.value;
  }
}
