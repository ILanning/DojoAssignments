app.controller("showController", ["$scope", "$routeParams", "friendsFactory", function($scope, $routeParams, friendsFactory){
  $scope.currentUser = {};
  friendsFactory.show($routeParams[friend], function(data){
    if(data.success){
      $scope.currentUser = data.result;
    }
  });
}]);
