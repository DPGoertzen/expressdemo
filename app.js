var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(request, response){
  response.send("<h1>This is working... hopefully.</h1>")
});

app.get('/mats', function(request, response){
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function(){
  console.log("Ready and waiting, what are your orders?");
});
