var app = angular.module("mainApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when("/:friend/edit", { templateUrl : "partials/edit.html" } )
                .when("/new", { templateUrl : "partials/new.html" })
                .otherwise();
});
