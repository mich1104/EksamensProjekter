/**
 * Created by Michael on 31/05/15.
 */
var mocha = require('mocha');
var should = require('should');
var facade = require('./../REST_API_Facade');
var nock = require('nock');

describe('Testing the data layer', function(){

    beforeEach(function(done){

        nock.cleanAll();
        //  Tilføjet for at sikre uafhængighed mellem tests
        //  Nock fjernes ikke automatisk og er sekvensiel;
        //  Det første nock er det første der bliver tjekket på
        //  Derfor smides der en error hvis der ikke bliver cleanet mellem tests
        done();
    });
    describe('getUsers', function() {
        it('should call the server on /api/users', function (done) {

            var nocked = nock('http://localhost:3000')
                .get('/api/users')
                .reply(200, 'it works');
            facade.getUsers(function (err, data) {

                should.not.exist(err);
                data.should.equal('it works');
                done();
            });
        });
        it('should return an error if something went wrong', function (done) {

            var nocked = nock('http://localhost:3000')
                .get('/api/users')
                .replyWithError('not found');
            facade.getUsers(function (err, data) {

                should.not.exist(data);
                console.log(err);
                should.exist(err);
                done();
            });
        });
    });
    describe('getUser', function(){

        it('should call the server on /api/users', function (done) {

            var email = 'testmail@mail.dk';
            var nocked = nock('http://localhost:3000')
                .get('/api/users/'+email)
                .reply(200, 'it works');
            facade.getUser(email, function (err, data) {

                should.not.exist(err);
                data.should.equal('it works');
                done();
            });
        });
    });
    describe('addUSer', function(){

        it('should POST to the server on /api/users', function(done){

            var email = 'testmail@mail.dk';
            var payload = {
                email:email,
                password: 'pass'
            };
            var nocked = nock('http://localhost:3000')
                .post('/api/users', JSON.stringify(payload))
                .reply(200, payload);
            facade.addUser(payload, function (err, data) {

                should.not.exist(err);
                data.email.should.equal(email);
                data.password.should.equal(payload.password);
                done();
            });
        });
    });
    describe('updateUser', function(){

        it('should PUT to the server on /api/users/:email', function(done){

            var email = 'testmail@mail.dk';
            var payload = {
                email:email,
                password: 'pass'
            };
            var nocked = nock('http://localhost:3000')
                .put('/api/users/'+email, JSON.stringify(payload))
                .reply(200, payload);
            facade.updateUser(payload, function (err, data) {

                should.not.exist(err);
                data.email.should.equal(email);
                data.password.should.equal(payload.password);
                done();
            });
        });
    });

    describe('deleteUser', function(){

        it('should DELETE to the server on /api/users/:email', function(done){

            var email = 'testmail@mail.dk';
            var user = {
                email:email,
                password: 'pass'
            }
            var nocked = nock('http://localhost:3000')
                .delete('/api/users/'+email)
                .reply(200, 'nocked user deleted');
            facade.deleteUser(user, function (err, data) {

                should.not.exist(err);
                data.should.equal('nocked user deleted');
                done();
            });
        });
    });
});