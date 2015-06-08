var mongoose = require( 'mongoose' );

var dbURI;


dbURI = 'mongodb://localhost/books';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  global.mongo_error = "Not Connected to the Database";
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

//the Regex below is a simple check for an ISBN number (only numbers allowed and length must be 10 --> The old format)
var bookSchema = new mongoose.Schema({
  title : {type: String, required : true},
  isbn : {type: String, required: true,unique: true, match: /^[0-9]{10}/},
  description : String,
  price : Number,
  numberOfPages : Number
});

mongoose.model( 'Books', bookSchema,"books" );
