app.factory("productFactory", function($http){
  var factory = {};
  var nextID = 0;
  var dummyData = [];

  factory.index = function(callback){
    // $http.get("/products").then(function(results){
    //   callback(results.data);
    // });
    callback({ result : dummyData });
  }

  factory.create = function(data, callback){
    data._id = nextID;
    nextID++;
    dummyData.push(data);
    callback({ result : data });
  }

  return factory;
})
