var _ = {
  map: function(list, iteratee, context) {
    let result = [];
    for (let i = 0; i < list.length; i++){
      result.push(iteratee(list[i], i, list));
    }
    return result;
  },

  reduce: function(list, iteratee, memo, context) {
    let i = 0;
    if(!memo){
      memo = list[0];
      i++;
    }
    for(; i < list.length; i++){
      memo = iteratee(memo, list[i], i, list);
    }
    return memo;
  },
  find: function(list, predicate, context) {
    for(let i = 0; i < list.length; i++)
      if(predicate(list[i]))
        return list[i];
    return undefined;
  },
  filter: function(list, predicate, context) {
    let result = [];
    for(let i = 0; i < list.length; i++)
      if(predicate(list[i]))
        result.push(list[i]);
    return result;
  },
  reject: function(list, predicate, context) {
    let result = [];
    for(let i = 0; i < list.length; i++)
      if(!predicate(list[i]))
        result.push(list[i]);
    return result;
  }
}

console.log("Map results:\n", _.map([1, 2, 3], function(num){ return num * 3; }));
console.log("Reduce results:\n", _.reduce([1, 2, 3, 4, 5, 6], function(a, b){ return a + b; }));
console.log("Find results:\n", _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log("Filter results:\n", _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log("Reject results:\n", _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
