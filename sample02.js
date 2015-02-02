var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'world';

  $scope.onClickBtn = function() {
    $scope.name = $scope.name.split('').reverse().join('');
  };
});

app.directive('myDirective', function() {
  // Some codes
});
