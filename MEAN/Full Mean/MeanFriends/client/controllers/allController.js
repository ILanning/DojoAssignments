app.controller("showController", ["$scope", "friendsFactory", function($scope, friendsFactory){
  $scope.filterText = "";
  $scope.userTable
  $scope.getUsers = function(){
    friendsFactory.index(function(results){

    });
  };

  $scope.delete = function(id){
    friendsFactory.delete(id, function(data){});
  };
}]);
