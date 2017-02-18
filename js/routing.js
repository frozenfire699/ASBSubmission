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
                                            $http ) {

    //$scope.teamName = 'Empty';
    //$scope.rscs = '';
    //$scope.skillsChal = '';
    //$scope.threeChal = '';
    //$scope.slamChal = '' ;
    //$scope.asgs = '';
    //$scope.tieBreak = '';

    $scope.entryObj = {
        teamName :'' ,
        risingChal : '',
        skillsChal : '',
        threeChal : '',
        slamChal : '',
        asg : '',
        tieBreak : ''
    }

    var self = this;
 $scope.save = function() {

     $log.info($scope.entryObj);
     //var config = {
      //          headers : {
      //              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
     //           }
      //      }

//$http.post('http://127.0.0.1:8081', $scope.entryObj, config)
     var EntryObject = window.JSON.stringify($scope.entryObj);
     $log.debug(EntryObject);
     $http.put('http://localhost:8080/messenger/webapi/myresource', EntryObject)

     .success(function (data, status, headers, config) {
         $log.debug(data);
         $scope.result = data;


        })
    .error(function (data, status, header, config) {

     });

    }

    //$scope.teams = dataService.teams;
    $scope.teams = ["ATL","WAS", "ORL", "MIA", "CHA",
                    "MIN", "DEN", "OKC", "UTA", "POR",
                    "BKN", "BOS", "TOR", "NYK", "PHI",
                    "DET", "CLE", "CHI", "IND", "MIL",
                    "MEM", "HOU", "SAS", "DAL", "NOP",
                   "LAL", "LAC", "GSW", "PHO", "SAC",];
    $scope.skillsPlayers = [ "Anthony Davis",
                            "Kristaps Prozingis", "Nikola Jokic", "Demarcus Cousins", "Gordon Hayward", "Devin Booker", "John Wall", "Isiah Thomas"];
    $scope.threePlayers = ["Klay Thompson" , "CJ McCollum",
                            "Kyle Lowry", "Eric Gordon", "Kyrie Irving", "Kemba Walker", "Nick Young", "Wesley Matthews"];
    $scope.slamPlayers = ["Glen Robinson III" , "DeAndre Jordon",
                            "Aaron Gordon", "Derrick Jones Jr"]


});

// Creating the Result Page Controller
myApp.controller('resultsController', function($scope, $log, $http) {

    $scope.name = 'Results';
    $scope.risingWinner = 'Team World';
    $scope.skillsWinner = 'Waiting';
    $scope.threeWinner = 'Waiting';
    $scope.slamWinner = 'Waiting' ;
    $scope.asgWinner = 'Waiting';
    $scope.tieBreakTotal = 'Waiting';
    $scope.load = function(){

     //$log.info($scope.entryObj);

    $http.get('http://localhost:8080/messenger/webapi/myresource')
     .then(function(response){
         $scope.users = response.data;

        //$scope.users = [entry];

        $log.debug($scope.users);
        //$scope.entryObj = JSON.parse(entry);
     });

 }

});
