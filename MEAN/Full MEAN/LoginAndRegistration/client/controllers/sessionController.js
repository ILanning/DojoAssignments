app.controller("sessionController", ["$scope", "$location", "userFactory", function($scope, $location, userFactory){
  $scope.errors = [];
  $scope.user = {};
  $scope.hideReg = true;
  $scope.login = function(){
    console.log($scope.user);
    if($scope.hideReg){
      userFactory.login($scope.user, function(results){
        if(results.data.success === true){
          console.log("Success");
          $location.url("/success");
          $scope.user = {};
        }
        if(results.errors){

        }
      });
    }
    else{
      userFactory.register($scope.user, function(results){
        console.log(results);
        if(results.data.success === "true"){
          $location.url("/success");
          $scope.user = {};
        }
        if(results.errors){

        }
      })
    }
  }
}]);
