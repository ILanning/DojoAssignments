app.controller('newController', ['$scope','friendsFactory',"$location", function($scope, friendsFactory, $location) {
  $scope.newFriend = {};
  // var index = function () {
  //     friendsFactory.index(function(data) {
  //         console.log(data);
  //         $scope.friends = data;
  //     })
  // }
  // index();
  $scope.create = function(){
    friendsFactory.create($scope.newFriend, function(data) {
        // If we needed to display an updated list of friends on this page, we would have to do this;
        // if(data.success){
        //   $scope.friends = data.result;
        // }
        if(data.success){
          $location.url("/");
          $scope.newFriend = {};
        }
    });
  }
}]);
