 "use strict";
  var app = angular.module("question4", ["ngRoute"]);

  app.config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: "/persons.tmpl.html",
        controller: "PersonsController"
    });
    $routeProvider.when('/add-person', {
      templateUrl: "/person-form.tmpl.html",
      controller: "AddPersonController"
    });
    $routeProvider.when('/edit-person/:id', {
      templateUrl: "/person-form.tmpl.html",
      controller: "EditPersonController"
    });
    $routeProvider.otherwise({redirectTo: '/'});
  });

  app.controller("PersonsController", function($scope, $http, $location) {
    $http.get("/api/persons").success(function(persons) {
      $scope.persons = persons;
    });

    $scope.editPerson = function(id) {
      $location.path("#/edit-person/" + id);
    }

    $scope.deletePerson = function(id) {
      if(confirm("Delete person?")) {
        $http.delete("/api/persons/" + id);
        for (var i = 0; i < $scope.persons.length; i += 1) {
          if ($scope.persons[i].id == id) {
            $scope.persons.splice(i, 1);
            break;
          }
        }
      }
    }
  });

  app.controller("AddPersonController", function($scope, $http, $location) {
    $scope.addPerson = function() {
      $http.post("/api/persons", $scope.person).success(function(data) {
        $location.path("#/");
      });
    }
    $scope.title = "Add Person";
    $scope.submitText = "Add"
  });

  app.controller("EditPersonController", function($scope, $http, $location, $routeParams) {
    $http.get('/api/persons/' + $routeParams.id).success(function(person) {
      $scope.person = person;
    });
    $scope.addPerson = function() {
      $http.put("/api/persons/" + $routeParams.id, $scope.person).success(function(data) {
        $location.path("#/");
      });
    }
    $scope.title = "Edit Person";
    $scope.submitText = "Save"
  });

