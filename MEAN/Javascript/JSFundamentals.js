function printValues(arr){
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]
printValues(x);
x.push(100);
x += ["hello", "world", "JavaScript is Fun"]
printValues(x);

var sum = 0;
for (var i = 1; i <= 500; i++){
  sum += i;
}
console.log(sum);

var minMaxAvgArr = [1, 5, 90, 25, -3, 0];
var resultArr = [minMaxAvgArr[0],minMaxAvgArr[0],minMaxAvgArr[0]];
for(var i = 1; i < minMaxAvgArr.length; i++){
  if(minMaxAvgArr[i] < resultArr[0])
    resultArr[0] = minMaxAvgArr[i];
  if(minMaxAvgArr[i] > resultArr[1])
    resultArr[1] = minMaxAvgArr[i];
  resultArr[2] += minMaxAvgArr[i];
}
resultArr[2] /= minMaxAvgArr.length;
console.log(resultArr);

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for(key in newNinja){
  console.log("\"" + key + "\": " + newNinja[key]);
}
