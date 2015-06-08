var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var persons = require('./data');

var app = express();

app.set("persons", persons);
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());

app.get('/api/persons', function(request, response) {
  response.json(persons);
});

app.get('/api/persons/:id', function(request, response) {
  var id = request.params.id;
  var result = persons.filter(function(p) {
    return p.id == id;
  });

  if(result.length === 0) {
    response.status(404).json({error: "person with id " + id + " not found"});
  }
  else {
    response.json(result[0]);
  }
});

app.post('/api/persons', function(request, response) {
  var person = request.body;
  var maxId = Math.max.apply(null, persons.map(function(p) { return p.id}));
  person.id = maxId + 1;
  persons.push(person);
  response.json(person);
});

app.put('/api/persons/:id', function(request, response) {
  var id = request.params.id;
  var person = request.body;

  if(persons.filter(function(p) { return p.id == id;}).length == 0) {
    return response.status(404).json({error: "person with id " + id + " not found"});
  }

  person.id = id;
  for(var i = 0; i < persons.length; i += 1) {
    if(persons[i].id == id) {
      persons[i] = person;
      break;
    }
  }
  response.json(person);
});

app.delete('/api/persons/:id', function(request, response) {
  var id = request.params.id;
  var person = undefined;
  for(var i = 0; i < persons.length; i += 1) {
    if(persons[i].id == id) {
      person = persons.splice(i,1);
      break;
    }
  }
  if(person) {
    response.json(person);
  }
  else {
    return response.status(404).json({error: "person with id " + id + " not found"});
  }
});

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, '/public/index.html'));
});

module.exports = app;
