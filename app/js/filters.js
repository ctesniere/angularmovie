"use strict";

angularMovieApp.filter('stars', function () {
    return function(inputValue) {
        return Array(inputValue + 1).join("\u2605");
    };
});


angularMovieApp.filter('poster', function () {
    return function(inputValue) {
        return inputValue || "img/no-poster.jpg";
    };
});
