/**
 * Created by Michael on 27/04/15.
 */
var app = angular.module('ReuseApp', []);

app.controller('filterControl', function($scope){

    $scope.title = 'Reuse';
    $scope.loginName = '';
    $scope.loginPass = '';
    $scope.person = {
        firstName: 'Peter',
        lastName: 'Smith'
    }
});

app.controller('caseControl', function($scope, exampleFactory){

    $scope.dashCase = function(input){

        return exampleFactory.dashCase(input);
    };
    $scope.titleCase = function(input){
        return exampleFactory.titleCase(input);
    };
    $scope.camelCase = function(input){

        return exampleFactory.camelCase(input);
    };
});

app.filter('name', function(){

    return function(input){

        console.log(input);
        var retStr;
        if(typeof input.lastName!= 'undefined' && typeof input.firstName!= 'undefined'){

            retStr = input.lastName+', '+input.firstName;
        }else{
            retStr = 'unknown format';
        }
        return retStr;
    }
});

app.directive('loginForm',function(){

    console.log('=header');
    return {
        restrict:'E',
        scope: {
          header: '@'
        },
        templateUrl: 'directive/login-form.html'
    }
});

app.factory('exampleFactory', function(){

    var factory = {};

    factory.titleCase = function(input){

        var indices = [];
        var charArr = [];
        for(i=0;i<input.length;i++){

            if(input[i]===" "){indices.push(i+1)}
        }
        for(i=0;i<input.length;i++){

            if(i===0){
                charArr.push(input[i].toUpperCase());
            }else if(indices.filter(function(element){return element===i;}).length===1){

                charArr.push(input[i].toUpperCase());
            }else{

                charArr.push(input[i]);
            }
        }
        return charArr.join('');
    };

    factory.camelCase = function(input){

        var indices = [];
        var charArr = [];
        for(i=0;i<input.length;i++){

            if(input[i]===" "){indices.push(i+1)}
        }
        for(i=0;i<input.length;i++){

            if(indices.filter(function(element){return element===i;}).length===1){

                charArr.push(input[i].toUpperCase());
            }else{

                charArr.push(input[i]);
            }
        }
        return replaceAll(' ', '', charArr.join(''));
    };

    factory.dashCase = function(input){

        return replaceAll(' ', '-', input);
    };

    function replaceAll(find, replace, str){

        return str.replace(new RegExp(find, 'g'), replace);
    }

    return factory;
});