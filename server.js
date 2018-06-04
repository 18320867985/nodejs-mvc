'use strict';

var hostname = "127.0.0.1";
var port = 3000;
var express = require('express');
var app = module.exports = express();

app.set('views', './views');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use("/public", express.static("./public"));

/*ע�������*/
require("./controllers")();

// 404 
app.use(function (req, res) {
    res.status(404).send("404 Request Page Not Found!");
});

// �����������˿�
app.listen(port, hostname, function () {
    console.log(`server run hostname ${hostname}:${port}`);
});


