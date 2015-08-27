"use strict";

angularMovieApp.directive("movielt", function () {
    return {
        templateUrl: "partials/listMovies.html",
        replace: true,
        restrict: 'E',
        scope: {
            movie: '=mymovie',
            index: '=index'
        },
        transclude: true,
        controller: function ($rootScope, $scope) {
            $scope.deleteMovie = function () {
                $scope.movie.$remove(function () {
                    $rootScope.$emit('deleteMovie', $scope.movie);
                });
            };
        }
    };
});
