app.factory("userFactory", ["$http", function($http){
  var factory = {};

  factory.login = function(user, callback){
    $http.post("users/login", user).then(function(result){
      console.log(result.data);
      callback(result.data);
    });
  };

  factory.register = function(user, callback){
    console.log("register: ", user);
    $http.post("users", user).then(function(result){
      console.log(result.data);
      callback(result.data);
    });
  }

  return factory;
}]);
