var app = angular.module("mainApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when("/", { templateUrl : "partials/all.html" } )
                .when("/new", { templateUrl : "partials/new.html" })
                .when("/:friend/show", { templateUrl : "partials/show.html" } )
                .when("/:friend/edit", { templateUrl : "partials/edit.html" } )
                .otherwise({ redirectTo :"/" });
});
