var request = require('request');
var url = "http://localhost:3000/api/book/";


//This provides you with a quick way to perform GET requests up against the REST-api
//Start the server (if not already done) and right click this file and select run
//Change the newBook object below to see how the API reacts to illegal inputs


//var isbn = "0000000000";
var isbn = "7583758740";  //Non-existing

request.get(url+isbn,function(error, response, body){
  console.log("Http Response Code: "+response.statusCode);
  console.log("Response body: ", JSON.parse(body));
});