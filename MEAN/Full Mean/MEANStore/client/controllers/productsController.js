app.controller("productsController", function($scope, productFactory){
  $scope.showMore = false;
  $scope.newProduct = {};
  $scope.tableFilter = "";

  $scope.indexProducts = function(){
    productFactory.index(function(data){
      $scope.products = data.result;
    });
  }
  $scope.createProduct = function(){
    productFactory.create($scope.newProduct, function(data){
      $scope.newProduct = {};
    });
    $scope.indexProducts();
  }
  $scope.indexProducts();

});
