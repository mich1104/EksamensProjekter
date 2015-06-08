/**
 * Created by Michael on 01/06/15.
 */

var dataArrays = require('./DataArrays');

function _getData(amount, types, callback){

    var typeArr;
    typeArr = types.split(',');
    typeArr = typeArr.map(function(element){

        return element.trim();
    });
    var returnArr = [];
    for(i=0;i<amount;i++){

        var data = {};
        typeArr.forEach(function(element){

            if(dataArrays[element] instanceof Array){


                data[element] = dataArrays[element][Math.floor(Math.random()*dataArrays[element].length)];
            }else{

                data[element] = element;
            }
        });
        returnArr.push(data);
    }
    callback(null, returnArr);
}

module.exports = {

    getData: _getData
}