/**
 * Created by Michael on 01/06/15.
 */
var request = require('request');
var nodeServer = 'http://localhost:3000';
var javaServer = 'http://localhost:8080/SubsystemInterfacesJava';
var stdPath = '/api/todos';

var fullPath = javaServer + stdPath;

function getAll(){

    request(fullPath, function(error,response,body){

        if(error){

            console.log('Error: ', error);
        }else{

            console.log('Standard output from '+fullPath + ' :');
            var fromJSON = JSON.parse(body);
            console.log(fromJSON);
        }
    });
}

function addNew(todoStr){

    var newTodo = {

        todo: todoStr
    }

    var asJSON = JSON.stringify(newTodo);

    request.post({

        headers: {

            'content-type': 'application/json'
        },
        url: fullPath,
        body: asJSON
    }, function(error,response,body){

        if(error){

            console.log('Error: ', error);
        }else{

            console.log('Standard output from '+fullPath + ' POST:');
            //var fromJSON = JSON.parse(body);
            console.log(body);
        }
    });
}

function deleteTodo(id){

    request({

        url: fullPath+'/'+id,
        method: 'DELETE'
    }, function(error,response,body){

        if(error){

            console.log('Error: ', error);
        }else{

            console.log('Standard output from '+fullPath + ' DELETE:');
            console.log(body);
        }
    });
}

getAll();
addNew('new todo here');
//deleteTodo(2);