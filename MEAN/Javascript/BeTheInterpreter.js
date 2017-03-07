//Problem 1
//Hoisted
var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
//Relatively untouched
console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);
//Result:  undef, Yipee


//Problem 2
//Hoisted
var food;
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";       // CAREFUL!
  console.log(food);
}
//Relatively untouched
food = "Chicken";
eat();
console.log(food);
//Result: half-chicken, gone, chicken



//Problem 3
//Hoisted
var new_word;
function lastFunc() {
  new_word = "old";
}
//Relatively untouched
new_word = "NEW!";
console.log(new_word);
//Result: NEW
