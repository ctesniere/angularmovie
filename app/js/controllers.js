"use strict";

angularMovieApp.controller("homeController" ,function ($rootScope, $scope) {

    $scope.user = 'Thierry LAU';

});

angularMovieApp.controller("moviesController" ,function ($rootScope, $scope, Movie) {

    $scope.movies = Movie.query();

    // display mode by default
    $scope.tableView = false;

    // icon by mode by default
    $scope.tableViewIcon = 'icon-th icon-white';

    // function called when changing view mode
    $scope.toogleView = function() {
        $scope.tableView = !$scope.tableView;

        if($scope.tableView === false){
            $scope.tableViewIcon = 'icon-th-list icon-white';
        } else {
            $scope.tableViewIcon = 'icon-th icon-white';
        }
    };

    $rootScope.$on('deleteMovie', function (event, movie) {
        $scope.movies.splice($scope.movies.indexOf(movie), 1);
        event.stopPropagation();
    });

});

angularMovieApp.controller('editMovieController', function($scope, Movie, $routeParams, $location){

     var movieId = $routeParams.id;

    Movie.get({id : movieId}, function(movie){
       $scope.movie = movie;
    });

    $scope.updateMovie = function(movie){
       Movie.update(movie, function(){
               $location.path('/movies');
           }, function(resp){
               console.error(resp);
           });
    };
});

angularMovieApp.controller("movieFormController" ,function ($scope, Movie) {

    $scope.showAlert = false;

    $scope.addMovie = function(movie){
        Movie.save(movie, function(){
                $scope.movies.push(movie);
                $scope.movie = {};
                $scope.showAlert = false;
                $('#movie-form-modal').modal('hide');
            }, function(resp, statusCode){
                console.error("Error : " + statusCode);
            });
    };
});
