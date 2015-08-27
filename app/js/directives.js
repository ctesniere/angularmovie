"use strict";

angularMovieApp.directive("movielt", function () {
    return {
        templateUrl: "partials/listMovies.html",
        replace: true,
        restrict: 'E',
        scope: {
            movie: '=mymovie'
        },
        transclude: true,
        controller: function ($scope, $element, $attrs, $transclude) {
            console.log($scope, $element, $attrs, $transclude);
        }
    };
});
