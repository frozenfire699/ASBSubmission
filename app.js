var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
$routeProvider

   .when('/' , {

       templateUrl : 'pages/main.html',
       controller : 'mainController'
   })

   .when('/second/:data' , {

       templateUrl : 'pages/second.html',
       controller : 'secondController'
   })

});

myApp.controller('mainController', function($scope, $log) {

    $scope.name = 'Main';

});

myApp.controller('secondController', function($scope, $log, $routeParams) {

    $scope.name = 'Second';
    $scope.data = $routeParams.data;

});
