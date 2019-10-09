var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
var port = process.env.PORT || 3001;
// var mqtt = require('mqtt');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/fanSwitch.html');
 });

app.use(express.static('public'));

// app.listen(process.env.PORT);
http.listen(port, function(){
  console.log('listening on *: ' + port);
});