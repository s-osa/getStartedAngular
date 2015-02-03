var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'world';
});

app.controller('SecondCtrl', function($scope) {
  $scope.now = new Date();
});

app.controller('ThirdCtrl', function($scope) {
  $scope.searchText = "";

  $scope.names = [ 'Apple', 'Grape', 'Orange', 'Banana', 'Melon', 'Strawberry']
});

app.controller('FourthCtrl', function($scope) {
  $scope.name = 'Martin';
});

app.filter('reverse', function() {
  return function(input) {
    if (typeof input !== 'string') {
      return '';
    }

    return input.split('').reverse().join('');
  };
});

app.filter('truncate', function() {
  return function(input, length, suffix) {
    if (length == undefined) { length = 10 };
    if (suffix == undefined) { suffix = '...' }

    if (input.length <= length) {
      return input;
    }

    return input.substring(0, length) + suffix;
  };
});

app.directive('myDirective', function() {
  // Some codes
});
