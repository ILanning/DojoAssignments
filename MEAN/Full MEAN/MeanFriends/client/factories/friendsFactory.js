app.factory('friendsFactory', ['$http', function($http) {
  var factory = {};
  factory.index = function(callback) {
    //call this method if you want to update or set the friends variable
    $http.get('/friends').then(function(returned_data){
      console.log(returned_data.data);
      if (typeof(callback) == 'function'){
        callback(returned_data.data);
      };
    });
  }
  factory.show = function(id, callback) {
    $http.get(`/friends/${id}`).then(function(returned_data){
      console.log(returned_data.data);
      returned_data.data.result.birthday = new Date(returned_data.data.result.birthday);
      if (typeof(callback) == 'function'){
        callback(returned_data.data);
      }
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
  factory.update = function(id, update, callback) {
    $http.put(`/friends/${id}`, update).then(function(returned_data) {
      console.log(returned_data.data);
      if (typeof(callback) == 'function'){
        callback(returned_data.data);
      }
    });
  }
  factory.delete = function(id, callback) {
      $http.delete(`/friends/${id}`, function(returned_data){
      console.log(returned_data.data);
      if (typeof(callback) == 'function'){
        callback(returned_data.data);
      }
    });
  }
  return factory;
}]);
