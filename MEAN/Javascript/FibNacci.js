function fib() {
  // Some variables here
  fibPrev = 0;
  fibCount = 0;
  function nacci() {
    // do something to those variables here
    if(fibCount == 0){
      fibCount = 1;
      console.log(fibCount);
    }
    else{
      let temp = fibCount;
      fibCount = fibCount + fibPrev;
      console.log(fibCount);
      fibPrev = temp;
    }
  }
  return nacci
}
var fibCounter = fib();
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "1"
fibCounter(); // should console.log "2"
fibCounter(); // should console.log "3"
fibCounter(); // should console.log "5"
fibCounter(); // should console.log "8"
