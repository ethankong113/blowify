var express = require('express');

var app = express();

/**
 *  Route
 */
require('./route')(app);

module.exports = app;
