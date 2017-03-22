app.controller("allController", ["$scope", "friendsFactory", function($scope, friendsFactory){
  $scope.filterText = "";
  $scope.userTable = [];

  $scope.getAll = function(){
    friendsFactory.index(function(results){
      if(results.success){
        $scope.userTable = results.result;
      }
    });
  };
  $scope.getAll();
  $scope.delete = function(id){
    friendsFactory.delete(id, function(data){});
  };
}]);
