// Registering my angular App
var myApp = angular.module('myApp', ['ngRoute']);

// Creating the routing configuration
myApp.config(function ($routeProvider) {
$routeProvider

   .when('/' , {

       templateUrl : 'pages/entry.html',
       controller : 'entryController'
   })

   .when('/results' , {

       templateUrl : 'pages/results.html',
       controller : 'resultsController'
   })

});


// Creating the Entry Page Controller
myApp.controller('entryController', function($scope, $log) {

    $scope.name = 'Entry';

});

// Creating the Result Page Controller
myApp.controller('resultsController', function($scope, $log) {

    $scope.name = 'Results';

});
