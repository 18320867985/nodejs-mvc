'use strict';

var hostname = "127.0.0.1";
var port = 3000;
var express = require('express');
var app = module.exports = express();
var renderHtml = require("./libs/renderHtml");

app.response.constructor.prototype.renderHtml = renderHtml.render;
app.set('views', './views');
app.use("/public", express.static("./public"));

/*×¢²á¿ØÖÆÆ÷*/
require("./controllers")();

// 404 
app.use(function (req, res) {
    res.status(404).send("404 not found page");
});

// ·þÎñÆ÷¼àÌý¶Ë¿Ú
app.listen(port, hostname, function () {
    console.log(`server run hostname ${hostname}:${port}`);
});


