function runningLogger(){
  console.log("I am running!");
}

function multiplyByTen(value){
  return value * 10;
}
multiplyByTen(5);

function stringReturnOne(){
  return "String 1";
}
function stringReturnTwo(){
  return "String 2";
}

function caller(inputFunction){
  if(typeof(inputFunction) == "function")
    inputFunction();
}

function myDoubleConsoleLog(inputFunction1, inputFunction2){
  if(typeof(inputFunction1) == "function" && typeof(inputFunction2) == "function"){
    console.log(inputFunction1());
    console.log(inputFunction2());
  }
}

function caller2(inputFunction){
  console.log("Starting");
  var promise = new Promise(function(resolve){
    setTimeout(function(){
      caller(inputFunction(stringReturnOne, stringReturnTwo));
      console.log("ending?");
    }, 2000);
    resolve();
  });
  return promise.then(function(){
    return "interesting"

  });
}
console.log(caller2(myDoubleConsoleLog));
