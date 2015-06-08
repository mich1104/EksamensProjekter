'use strict';

describe('Using Karma/Jasmine', function(){

    var controller, rootScope, scope, location, httpBackend;

    beforeEach(module('question4'));

    describe('Add Person Controller', function(){

        beforeEach(inject(function($controller, $rootScope){

            scope = $rootScope.$new();
            controller = $controller('AddPersonController', {$scope: scope});
        }));
        it('Should exist', function(){

            expect(controller).toBeDefined();;
        });
        it('Should set the title to "Add Person"', function(){

            expect(scope.title).toBe("Add Person");
        });
    });
    describe('PersonsController', function(){

        beforeEach(inject(function($controller, $rootScope, $location, $httpBackend){


            httpBackend = $httpBackend;
            httpBackend.expectGET('/api/persons').respond(JSON.stringify([
                {person:'person'},{person:'person'},{person:'person'}
            ]));
            location = $location;
            scope = $rootScope.$new();
            controller = $controller('PersonsController', {$scope: scope});

        }));
        describe('editPerson function', function(){

            it('should call $location.path with /edit-person/:id as argument', function(){

                scope.editPerson(5);
                expect(location.path()).toBe('/#/edit-person/5');
            });
        });
        it('should set $scope.persons to the array fetched through calling /api/persons', function(){

            console.log(scope.persons);
            expect(scope.persons).toBeUndefined(); // httpBackend er ikke blevet flushet, så reponse er ikke kommet tilbage til controlleren
            httpBackend.flush();
            console.log(scope.persons);
            expect(scope.persons.length).toBe(3);
            expect(scope.persons[0].person).toBe('person');
        });
    });
    describe('location.path', function(){

        beforeEach(inject(function($rootScope, $location, $httpBackend){

            location = $location;
            rootScope = $rootScope;
            httpBackend = $httpBackend;

        }));
        it('should go to "/" when that location is set', inject(function($route){

            httpBackend.expectGET('/persons.tmpl.html').respond(200);
            // Unknown paths is redirected to '/' which then uses the templateUrl seen in the httpBackend mock
            // the controller is set to PersonsController (public/app.js linie 7)
            location.path('/');
            rootScope.$digest();
            expect($route.current.controller).toBe('PersonsController');
            expect(location.path()).toBe('/');
        }));
        it('should got to "/" when an unknown path is set', inject(function( $route){

            httpBackend.expectGET('/persons.tmpl.html').respond(200);
            // Unknown paths is redirected to '/' which then uses the templateUrl seen in the httpBackend mock
            // the controller is set to PersonsController (public/app.js linie 7)
            location.path('/UnknownHost');
            rootScope.$digest();
            expect($route.current.controller).toBe('PersonsController');
            expect(location.path()).toBe('/');
        }));
    });
    describe('EditPersonController', function(){

        var personID = 5;
        beforeEach(inject(function($rootScope, $httpBackend){

            scope = $rootScope.$new();

            httpBackend = $httpBackend;
            httpBackend.expectGET('/api/persons/'+personID).respond(JSON.stringify({id:personID}));
        }));
        it('should fetch and store a person when', inject(function($controller, $routeParams){

            $routeParams.id = personID;
            controller = $controller('EditPersonController', {$scope: scope, $routeParams: $routeParams});
            console.log(scope.person);
            httpBackend.flush();
            console.log(scope.person);
            expect(scope.person).toBeDefined();
            expect(scope.person.id).toBe(personID);
        }));
    });
});