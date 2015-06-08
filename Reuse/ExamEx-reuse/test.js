/**
 * Created by Michael on 05/06/15.
 */

function test(input){

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
}
function replaceAll(find, replace, str){

    return str.replace(new RegExp(find, 'g'), replace);
}

console.log(test('hej med dig'));