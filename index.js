var express = require('express');
var app = express();

app.post('/africastalking', function(req, res){
  console.log('request: ', JSON.stringify(req));
  return res.status(200).send('END goodbye');
});
