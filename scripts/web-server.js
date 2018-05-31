var express = require('express');
var path = require('path');
var app = express();
var rootpath = path.normalize(__dirname + '/../');

app.use(express.static(rootpath + '/app'));

app.listen(4001);

console.log('Server Started...');

