var express = require('express');
var path = require('path');

/**
 * Route Config
 *
 * By Blowify Team
 */
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../client/index.html"));
    });

    app.use(express.static(path.join(__dirname, "../client/js")));
    app.use(express.static(path.join(__dirname, "../client/css")));
    app.use(express.static(path.join(__dirname, "../client/font")));

};