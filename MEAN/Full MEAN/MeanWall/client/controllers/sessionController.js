app.controller("sessionController", function($scope, $location, userFactory){
  $scope.userID = "";
  $scope.username = "";
  $scope.currUser = "";
  $scope.errors = [];

  userFactory.checkStatus(function(data){
    if(data.result){
      $scope.userID = data.result._id;
      $scope.currUser = data.result.username;
    }else{
      $location.url("/");
    }
  });

  $scope.login = function(){
    $scope.errors = [];
    console.log($scope.username);
    userFactory.login({ username : $scope.username }, function(data){
      if(data.success){
        $scope.userID = data.result;
        $scope.currUser = $scope.username;
        $scope.username = "";
        $location.url("/wall");
      }
      if(data.errors){
        $scope.errors = data.errors;
      }
    })
  }
  $scope.logout = function(){
    $scope.currUser = "";
    $scope.userID = "";
    $location.url("/");
    userFactory.logout(function(data){ console.log(data); });
  }
})
