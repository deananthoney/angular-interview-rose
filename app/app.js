'use strict';

angular.module('myApp', [])
  .controller('BookController', function($scope, $http) {
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "Lord of the Rings";

    function fetch() {
      $http.get("https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=" + $scope.search + "&tomatoes=true&plot=full")
        .then(function(response) {
          $scope.details = response.data;
        });

      $http.get("https://www.omdbapi.com/?s=" + $scope.search)
        .then(function(response) {
          $scope.related = response.data;
        });
    }

    $scope.update = function(movie) {
      $scope.search = movie.Title;
    };

    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
    }
  });

