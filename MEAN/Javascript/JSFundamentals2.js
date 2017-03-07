function sumInts(x, y){
  var sum = 0;
  for (var i = x; i < y; i++){
    sum += i;
  }
  return sum;
}
function min(arr){
  var min = arr[0];
  for(var i = 1; i < arr.length; i++){
    if (arr[i] > min)
      min = arr[i];
  }
  return min;
}
function avg(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++)
    sum += arr[i];
  return sum / arr.length;
}

var sumInts = function(x, y){
  var sum = 0;
  for (var i = x; i < y; i++){
    sum += i;
  }
  return sum;
}
var min = function(arr){
  var min = arr[0];
  for(var i = 1; i < arr.length; i++){
    if (arr[i] > min)
      min = arr[i];
  }
  return min;
}
var avg = function(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++)
    sum += arr[i];
  return sum / arr.length;
}

var object = {
  "sumInts" : function(x, y){
    var sum = 0;
    for (var i = x; i < y; i++){
      sum += i;
    }
    return sum;
  },
  "min" : function(arr){
    var min = arr[0];
    for(var i = 1; i < arr.length; i++){
      if (arr[i] > min)
        min = arr[i];
    }
    return min;
  },
  "avg" : function(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++)
      sum += arr[i];
    return sum / arr.length;
  }
}

var person = {
  "name" : "myName",
  "distance_travelled" : 0,
  "say_name" : function(){ console.log(this.name); },
  "say_something" : function(text){ console.log( `${this.name} says \"` + text + '\"'); },
  "walk" : function(){
    console.log(this.name + " is walking");
    this.distance_travelled += 3;
  },
  "run" : function(){
    console.log(this.name + " is running");
    this.distance_travelled += 10;
  },
  "crawl" : function(){
    console.log(this.name + " is crawling");
    this.distance_travelled += 1;
  }
}
person.say_something("woo");
person.run();
