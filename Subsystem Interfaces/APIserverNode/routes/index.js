var express = require('express');
var router = express.Router();
var todoList = require('./../todoList');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/todos', function(req,res,next){

    todoList.push({

        id: todoList.length+1,
        todo: req.body.todo,
        completed: false
    });
    res.end('todo added: '+req.body.todo);
});

router.delete('/api/todos/:id', function(req,res,next){

    todoList = todoList.filter(function(element){

        return element.id != req.params.id;
    });
    res.end('todo Deleted');
});

router.get('/api/todos', function(req,res,next){

    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(todoList));
});

module.exports = router;
