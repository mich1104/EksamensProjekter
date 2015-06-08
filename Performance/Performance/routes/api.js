/**
 * Created by Michael on 05/06/15.
 */
var express = require('express');
var router = express.Router();
var data = require('./../data');

router.get('/', function(req,res){

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
});

module.exports = router;