var should = require('should');
var express = require('express');
var PORT = 9999;
var baseURL = 'http://localhost:'+PORT+'/api';
var users = require('./../users');
var app = require('./../app');
var request = require('request');
var testServer;

describe('Testing the provided REST API', function(){

    before(function(done){

        testServer = app.listen(PORT, function(){
            console.log('Testserver listening on port:'+PORT);
            done();
        });
    });

    after(function(){
        testServer.close();
    });

    describe('GET method on /api/users', function(){

        it('should get all 9 users', function(done){

            request.get(baseURL+'/users', function(error,response,body){

                if(error){
                    throw error;
                    done();
                }else{

                    JSON.parse(body).should.have.length(9);
                    done();
                }
            });
        });
        it('should get the user with the specific email', function(done){

            var email = 'quam@Loremipsum.com'; //Taken from users.js
            request.get(baseURL+'/users/'+email, function(error,response,body){

                if(error){
                    throw error;
                    done();
                }else{

                    JSON.parse(body).email.should.equal(email);
                    JSON.parse(body).should.have.property('password');
                    done();
                }
            });
        });
    });

    describe('POST method on api/users', function(){

        it('should return an error if the user already exists', function(done){

            var email = 'quam@Loremipsum.com'; //Taken from users.js
            var newUser = {
                email: email,
                password: 'password'
            };
            var options = {
                method:'POST',
                url: baseURL+'/users',
                body: newUser,
                json: true
            };
            request(options, function(error,response,body){

                response.statusCode.should.equal(400);
                body.error.should.equal('user exist');
                done();
            });

        });
        it('should add the user if the user does not already exist', function(done){

            var email = 'newEmail@newEmail.com';
            var newUser = {
                email: email,
                password: 'password'
            }
            var options = {
                method:'POST',
                url: baseURL+'/users',
                body: newUser,
                json: true
            }
            request(options, function(error,response,body){

                response.statusCode.should.equal(200);
                body.email.should.equal(email);
                body.password.should.equal('password');
                done();
            });
        });
    });

    describe('PUT method on api/users/:email', function(){

        it('should return an error if no user is provided', function(done){

            var email = 'quam@Loremipsum.com'; //Taken from users.js
            var newUser;
            var options = {
                method:'PUT',
                url: baseURL+'/users/'+email,
                body: newUser,
                json: true
            };
            request(options, function(error,response,body){

                //  Giver en 200 responseCode selvom der ikke bliver givet nogen user med
                console.log(body);
                response.statusCode.should.equal(404);
                body.error.should.equal('no user provided');
                done();
            });
        });

        it('should return an error if the user provided could not be found', function(done){

            var email = 'notfoundemail@mail.dk';
            var newUser = {
                email: email,
                password: 'password'
            };
            var options = {
                method:'PUT',
                url: baseURL+'/users/'+email,
                body: newUser,
                json: true
            };
            request(options, function(error,response,body){

                //  Giver en 200 responseCode selvom der ikke bliver givet nogen user med
                console.log(body);
                response.statusCode.should.equal(404);
                body.error.should.equal('user not found');
                done();
            });
        });
    });

    describe('DELETE method on api/users/:email', function(){

        it('should return an error if the provided user is not found', function(done){

            var email = 'notfound@email.com';
            var options = {
                method:'DELETE',
                url: baseURL+'/users/'+email,
                json: true
            };
            request(options, function(error,response,body){

                console.log(body);
                response.statusCode.should.equal(404);
                body.error.should.equal('user not found');
                done();
            });
        });

        it('should return the deleted user if the user was deleted', function(done){

            var email = 'tellus.lorem@ipsum.com'; //Taken from users.js
            var options = {
                method:'DELETE',
                url: baseURL+'/users/'+email,
                json: true
            };
            request(options, function(error,response,body){

                console.log(body);
                response.statusCode.should.equal(200);
                body.email.should.equal(email);
                options.method = 'GET';
                request.get(options, function(error2, response2, body2){

                    response2.statusCode.should.equal(404);
                    body2.error.should.equal('user not found');
                    done();
                });
            });
        });
    });
});