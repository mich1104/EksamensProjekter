angular.module('examEx19', ['avgFilters', 'directives', 'services'])
  .controller('ExamController', ['$scope', 'dataService', '$http', function($scope, dataService, $http) {

    var studentsInfo = {};
    studentsInfo.allCourses = dataService.subjects();
    studentsInfo.students = dataService.students();

        $scope.studentsInfo = studentsInfo;

        if(typeof RESTServiceImplemented !== 'undefined'){

            /**
             *  Man ville lave denne del inde i factory/service
             * */
            $http.get('/api/courses')
                .success(function(data,status,headers,config){

                    $scope.studentsInfoFromREST = data;
                });
        }
  }]);