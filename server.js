'use strict';
//version 1.1.1
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(8080);