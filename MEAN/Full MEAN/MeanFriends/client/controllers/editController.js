app.controller('editController', ['$scope','friendsFactory', '$routeParams', "$location", function($scope, friendsFactory, $routeParams, $location) {
   friendsFactory.show($routeParams.friend, function(returnedData){
     $scope.currentFriend = returnedData.result;
     console.log($scope.currentFriend);
   });

   console.log($scope.currentFriend);
   $scope.update = function(){
    console.log($scope.currentFriend);
     friendsFactory.update($routeParams.friend, $scope.currentFriend, function(data){
       console.log(data);
       $location.url("/");
     })
   }
  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method
    with ng-submit or ng-click (from the form in the previous assignment).  Want to see
    all of the friends when we get back including the updated on??
    See Index in the previous controller.
  */
}]);
