'use strict';

console.log('Application Startup: ' + process.env.NODE_ENV);

var express = require('express');

var app = express();
app.use('/steal',express.static(__dirname + '/node_modules/steal/'));
app.use('/dist',express.static(__dirname + '/dist/'));
app.use('/',express.static(__dirname + '/view/'));

var http = require('http');
   

var server =  http.createServer(app);
  
server.listen(8080,'localhost', function() {
    console.log('Server Started');      
});