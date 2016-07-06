var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.send("<h1>This is working... hopefully.</h1>")
});

app.listen(3000, function(){
  console.log("Ready and waiting, what are your orders?");
});
