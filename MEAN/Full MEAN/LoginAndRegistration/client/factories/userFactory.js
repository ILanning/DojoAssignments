app.factory("userFactory", ["$http", function($http){
  var factory = {};

  factory.login = function(user, callback){
    $http.post("users/login", user).then(function(err){
      console.log(err);
      callback(err);
    });
  };

  factory.register = function(user, callback){
    console.log("register: ", user);
    $http.post("users", user).then(function(err){
      console.log(err);
      callback(err);
    });
  }

  return factory;
}]);
