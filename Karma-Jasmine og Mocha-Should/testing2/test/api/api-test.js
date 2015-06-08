var should = require('should');
var app = require('./../../server');
var request = require('request');
var baseURL = 'http://localhost:6789/api';
var data = require('./../../data');
var testServer;

describe('API test', function(){

    before(function(done){

        testServer = app.listen(6789, function() {
            console.log("Testserver listen on port 6789");
            done();
        });
    });
    after(function(){

        testServer.close(function(){

            console.log('Testserver shutting down');
        });
    });

    describe('GET requests', function(){

        it('Should return the full list of persons', function(done){

            request(baseURL+'/persons', function(error,response,body){

                should.not.exist(error);
                JSON.parse(body).length.should.equal(data.length);
                done();
            });
        });
        it('Should return the person with the specified id', function(done){

            request(baseURL+'/persons/5', function(error,response,body){

                should.not.exist(error);
                var returnedPerson = JSON.parse(body);// Det er JSON der kommer tilbage
                returnedPerson.name.should.equal('Geoffrey Parrish');
                done();
            });
        });
    });
    describe('POST request', function(){

        it('Should POST the provided person', function(done){

            var person = {
                name: 'michael',
                address: 'vejnavn',
                city: 'byen',
                email: 'minmail@mail.dk'
            };
            request({

                method:'POST',
                url: baseURL+'/persons',
                body: person,
                json:true
            }, function(error,response,body){

                should.not.exist(error);
                var returnedPerson = body; // For some reason er det ikke JSON der kommer tilbage
                returnedPerson.name.should.equal(person.name);
                done();
            });
        });
    });
    describe('PUT request', function(){

        it('should return a JSON DTO with an error message if ID is not found', function(done){

            var person = {
                name: 'michael',
                address: 'vejnavn',
                city: 'byen',
                email: 'minmail@mail.dk'
            };
            request({

                method:'PUT',
                url: baseURL+'/persons/32121456987',
                body: person,
                json:true
            }, function(error,response,body){

                console.log(body);
                response.statusCode.should.equal(404);
                should.exist(body.error);

                done();
            });
        });
        it('should return the updated person', function(done){

            var person = {
                name: 'update',
                address: 'vejnavn',
                city: 'byen',
                email: 'minmail@mail.dk'
            };
            request({

                method:'PUT',
                url: baseURL+'/persons/3',
                body: person,
                json:true
            }, function(error,response,body){

                response.statusCode.should.equal(200);
                body.name.should.equal('update');

                done();
            });
        });
    });
    describe('DELETE request', function(){

        it('should return an error if the person is not found', function(done){

            request({

                method:'DELETE',
                url: baseURL+'/persons/32121456987'
            }, function(error,response,body){

                console.log(body);
                var returnedStr = JSON.parse(body); //Skal parses her fordi der ikke bliver sat json:true i request options bliver response.body ikke parset
                response.statusCode.should.equal(404);
                should.exist(returnedStr.error);

                done();
            });
        });
    });
});