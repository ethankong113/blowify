var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 4689;

app.use(express.static(path.join(__dirname, "../client/js")));
app.use(express.static(path.join(__dirname, "../client/css")));
app.use(express.static(path.join(__dirname, "../client/font")));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.listen(port, function() {
  console.log("Server running on port " + port);
});
