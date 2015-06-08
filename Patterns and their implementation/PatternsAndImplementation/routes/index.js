var express = require('express');
var router = express.Router();
var dataGenerator = require('./../Modules/dataGenerator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/addresses/:amount/:types', function(req,res,next){

    dataGenerator.getData(req.params.amount, req.params.types, function(err, data){

        var toJSON = JSON.stringify(data);
        //res.setHeader('content-type', 'application/json; char-set=utf8');
        //res.setHeader('content-length', toJSON.length);
        //res.end(toJSON);
        res.render('dataGen', {data: data});
    })
});
module.exports = router;
