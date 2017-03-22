var app = angular.module("mainApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when("/", { templateUrl : "partials/register.html" })
                .when("/success", { templateUrl : "partials/success.html" })
                .otherwise({ redirectTo : "/" });
});
