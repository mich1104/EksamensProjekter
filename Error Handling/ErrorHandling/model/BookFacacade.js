var mongoose = require("mongoose");
var db = require("./db");
var bookModel = mongoose.model("Books");


function findBook(isbn, callback){
  bookModel.findOne({isbn : isbn},function(err,book){
    if(err){
      return callback(err);
    }else if(book===null){
        callback({

            status: 404,
            msg: 'No match found for the provided ISBN'
        });

    }else {
        //Check if book is null, and if ???
        callback(null, book);
    }
  })
}

function addBook(book,callback){
  /* This simulates a programmer error, calling a non existing function throws an error
  *  at runtime*/
  if(book.price == null) {
    setPrice(book);
  }
  bookModel.create(book,function(err,book){
    if(err){
        console.log(err);
        if(err.code == 11000){

            callback({

                status: 400,
                msg: 'ISBN already exists'
            });
        }else {

            return callback(err);
        }
    }
    callback(null,book);
  })
}

//This is what is exported from this Module
module.exports = {
  findBook : findBook,
  addBook: addBook
}

