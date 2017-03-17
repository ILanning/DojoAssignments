app.factory('friendsFactory', ['$http', function($http) {
  var factory = {};
  factory.index = function(callback) {
      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        callback(friends);
      });
  }
  factory.show = function(id, callback) {
      $http.get(`/friends/${id}`, function(data){
      if (typeof(callback) == 'function'){
        callback(data.data);
      });
  }
  factory.create = function(newfriend, callback) {
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
  }
  factory.update = function(id, callback) {
    $http.put(`/friends/${id}`).then(function(returned_data) {
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
    })
  }
  factory.delete = function(id, callback) {
      $http.delete(`/friends/${id}`, function(data){
      if (typeof(callback) == 'function'){
        callback(data.data);
      });
  }
  return factory;
}]);
