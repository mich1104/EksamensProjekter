angular.module('examExercise', [])
  .controller('examController', ['$scope', '$http', function($scope, $http) {
    $scope.msg = 'God luck';

        $http.get('/api')
            .success(function(data, status, headers, config){


                $scope.data = data;
            });
  }]);