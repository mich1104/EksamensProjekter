var app = angular.module('booksApp', ['ngRoute']);


app.config(function ($routeProvider) {
  $routeProvider
    .when("/findBook", {
      templateUrl: "views/findBook.html",
      controller: "findBookCtrl"
    })
    .when("/newBook", {
      templateUrl: "views/addBook.html",
      controller: "addBookCtrl"
    })
    .otherwise({
      redirectTo: "/findBook"
    })
})

app.controller("addBookCtrl", function ($scope, $http) {

    $scope.errorOccurred = false;
  $scope.newBook = {};
  $scope.cancel = function () {
    $scope.newBook = {};
  }

  $scope.saveBook = function () {
    $http.post('/api/book', $scope.newBook)
      .success(function (data, status, headers, config) {
            $scope.newBook = data;
            $scope.errorOccurred = false;
      }).
      error(function (data, status, headers, config) {
            $scope.errorOccurred = true;
            $scope.errorStatus = status;
            $scope.error = data;
      });
  }
});

app.controller("findBookCtrl", function ($scope,$http) {

  $scope.isbn ="";
  $scope.findBook = function () {
    $http.get('/api/book/'+$scope.isbn)
      .success(function (data, status, headers, config) {
        $scope.book = data;
            $scope.errorOccurred = false;
      }).
      error(function (data, status, headers, config) {
        //Do something here
            $scope.errorOccurred = true;
            $scope.errorStatus = status;
            $scope.error = data;
      });
  }
})
