app.controller("sessionController", ["$scope", "$location", "userFactory", function($scope, $location, userFactory){
  $scope.errors = [];
  $scope.user = {};
  $scope.hideReg = true;
  $scope.loggedInID = "";
  $scope.login = function(){
    $scope.errors = [];
    console.log($scope.user);
    userFactory.login($scope.user, function(data){
      console.log(data);
      if(data.success === true){
        $location.url("/success");
        $scope.user = {};
        $scope.loggedInID = data.result._id;
      }
      if(data.errors){
        $scope.errors = data.errors;
      }
    });
  };
  $scope.register = function(){
    $scope.errors = [];
    console.log($scope.user);
    userFactory.register($scope.user, function(data){
      console.log(data);
      if(data.success === true){
        $location.url("/success");
        $scope.user = {};
        $scope.loggedInID = data.result._id;
      }
      if(data.errors){
        $scope.errors = data.errors;
      }
    })
  };
}]);
