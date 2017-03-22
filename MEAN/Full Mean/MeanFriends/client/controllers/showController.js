app.controller("showController", ["$scope", "$routeParams", "friendsFactory", function($scope, $routeParams, friendsFactory){
  $scope.currentUser = {};
  console.log($routeParams["friend"]);
  friendsFactory.show($routeParams["friend"], function(data){
    console.log(data);
    if(data.success){
      $scope.currentUser = data.result;
    }
  });
}]);
