var bookFacade = require('../model/BookFacacade');


bookFacade.addBook({title:"Book-1",price: 30,isbn: "0000000000",description: "Some Text",pages:281}, function(err,book){});
bookFacade.addBook({title:"Book-2",price: 40,isbn: "1111111111",description: "Bla bla",pages:300}, function(err,book){});