/**
 * Created by Michael on 01/06/15.
 */

/**
 * @NoArgument Returns a random value between 0 and 0.99 recurring
 * @param {Integer} Returns a random value between 0 and {Integer}-1
 * @param {Integer1, Integer2} Returns a random value between the two integers
 *
 */
function _getRandom(){
    if(arguments.length==0){

        return Math.random();
    }else if(arguments.length==1){

        return Math.floor(Math.random()*arguments[0]);
    }else if(arguments.length==2){

        return Math.floor((Math.random()*(arguments[1]-arguments[0]))+arguments[0]);
    }else{

        console.log('Too many arguments');
    }

}

module.exports = {

    getRandom: _getRandom
}