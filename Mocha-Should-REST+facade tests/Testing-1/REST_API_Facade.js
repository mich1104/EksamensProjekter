/**
 * Created by Michael on 31/05/15.
 */
var request = require('request');
var URL = 'http://localhost:3000/api/users';

function _getUsers(callback){

    request.get(URL, function(error,response,body){

        if(error){

            callback(error);
        }else{

            return callback(null,body);
        }
    });
};

function _getUser(email, callback){

    request.get(URL+'/'+email, function(error,response,body){

        if(error || body.error){
            callback(error||body.error);
        }else{

            return callback(null, body);
        }
    });
};

function _addUser(user, callback){

    var options = {

        method: 'POST',
        url: URL,
        body: user,
        json: true
    }
    request(options, function(error,response,body){

        if(error || body.error){
            callback(error||body.error);
        }else{

            return callback(null, body);
        }
    });
};

function _updateUser(user, callback){

    var options = {

        method: 'PUT',
        url: URL+'/'+user.email,
        body: user,
        json: true
    }
    request(options, function(error,response,body){

        if(error || body.error){
            callback(error||body.error);
        }else{

            return callback(null, body);
        }
    });
};

function _deleteUser(user, callback){

    var options = {

        method: 'DELETE',
        url: URL+'/'+user.email,
        json: true
    }
    request(options, function(error,response,body){

        if(error || body.error){
            callback(error||body.error);
        }else{

            return callback(null, body);
        }
    });
};

module.exports = {

    getUsers: _getUsers,
    getUser: _getUser,
    addUser: _addUser,
    updateUser: _updateUser,
    deleteUser: _deleteUser
}