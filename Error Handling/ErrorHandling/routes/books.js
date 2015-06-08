var express = require('express');
var router = express.Router();
var bookFacade = require('../model/BookFacacade');

//Book API
router.get('/:isbn', function (req, res) {
    console.log(req.params.isbn);
  bookFacade.findBook(req.params.isbn, function (err, book) {
    if (err) {
        res.status(err.status || 400);
        res.end(JSON.stringify({error: err.msg || err.toString()}));
        return;
    }else {
        res.end(JSON.stringify(book));
    }
  })

});

router.post("/", function (req, res) {
  var book = req.body;
  bookFacade.addBook(book, function (err, book) {
    if (err) {
        console.log(err);
      res.status(err.status || 400);
      res.end(JSON.stringify({error: err.msg || err.toString()}));
      return;
    }
    res.end(JSON.stringify(book));
  })
});

module.exports = router;
