var app = angular.module("mainApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when("/", { templateUrl : "partials/login.html" })
                .when("/wall", { templateUrl : "partials/board.html" })
                .otherwise({ redirectTo : "/" });
})
