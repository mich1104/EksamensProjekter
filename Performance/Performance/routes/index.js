var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Exam Question Performance' });
});

router.get('/jadeDemo', function(req, res) {
  res.render('jadeFileForExercise.jade', { introText: 'Create the Table here',members : require("../data") });
});

module.exports = router;
