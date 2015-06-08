/**
 * Created by Michael on 06/06/15.
 */
angular.module('directives', [])
    .directive('studentGrades', function(){

    return {

        templateUrl:'studentGrades.html',
        restrict: 'E'
    }
});