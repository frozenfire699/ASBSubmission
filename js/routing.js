// Registering my angular App
var myApp = angular.module('myApp', ['ngRoute', 'ngStorage']);

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
myApp.controller('entryController', function($scope, $log,
                                            $localStorage ) {

    //$scope.teamName = 'Empty';
    //$scope.rscs = '';
    //$scope.skillsChal = '';
    //$scope.threeChal = '';
    //$scope.slamChal = '' ;
    //$scope.asgs = '';
    //$scope.tieBreak = '';

    $scope.entryObj = {
        teamName :'' ,
        rscs : '',
        skillsChal : '',
        threeChal : '',
        slamChal : '',
        asgs : '',
        tieBreak : ''
    }
 $scope.save = function() {

     $log.info($scope.entryObj);
        window.localStorage.setItem("entryObj", JSON.stringify($scope.entryObj));

    }

    //$scope.teams = dataService.teams;
    $scope.teams = ["ATL","WAS", "ORL", "MIA", "CHA",
                    "MIN", "DEN", "OKC", "UTA", "POR",
                    "BKN", "BOS", "TOR", "NYK", "PHI",
                    "DET", "CLE", "CHI", "IND", "MIL",
                    "MEM", "HOU", "SAS", "DAL", "NOP",
                   "LAL", "LAC", "GSW", "PHO", "SAC",];
    $scope.skillsPlayers = ["Joel Embidd" , "Anthony Davis",
                            "Kristaps Prozingis", "Nikola Jokic", "Demarcus Cousins", "Gordon Hayward", "Devin Booker", "John Wall", "Isiah Thomas"];
    $scope.threePlayers = ["Klay Thompson" , "CJ McCollum",
                            "Kyle Lowry", "Eric Gordon", "Kyrie Irving", "Kemba Walker", "Nick Young", "Wesley Matthews"];
    $scope.slamPlayers = ["Glen Robinson III" , "DeAndre Jordon",
                            "Aaron Gordon", "Derrick Jones Jr"]


});

// Creating the Result Page Controller
myApp.controller('resultsController', function($scope, $log) {

    $scope.name = 'Results';

     $scope.load = function(){

     $scope.entryObj = JSON.parse(window.localStorage.getItem("entryObj"));

     $log.info($scope.entryObj);
 }

});
