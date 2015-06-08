var request = require('request');


//This provides you with a quick way to perform POST requests
//Start the server (if not already done) and right click this file and select run
//Change the newBook object below to see how the API reacts to illegal inputs
//For example, remove the price property and observe the response

//already there isbn: 7583758739
// invalid isbn: 9876A43210
var newBook = {
  title: "A new Book",
  isbn:  "7583758739",
  description : "A description",
  numberOfPages: 345
}

var options = {
  method: 'POST',
  url: "http://localhost:3000/api/book",
  json: true,
  body:newBook
}

console.log(JSON.stringify(newBook));

request(options, function (error, response, body) {
  console.log("Http Response Code: "+response.statusCode);
  console.log("Response body: "+JSON.stringify(body));

});
