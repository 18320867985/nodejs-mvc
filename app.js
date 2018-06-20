'use strict';

// server port and hostname
var hostname = "127.0.0.1";
var port = 3000;

// express 
var express = require('express');
var app = module.exports = express();

// session
var session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));

// cookie-parser
var cooikieParser = require('cookie-parser');
app.use(cooikieParser()); 

// body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// ejs
app.set('views', './views');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

// static pages
app.use("/public", express.static("./public"));
app.use("/json", express.static("./json"));
app.use("/test", express.static("./test"));

// Ç°¶Ë¾²Ì¬ html
app.use("/", express.static("./html"));

// ºó¶Ë¾²Ì¬  html
app.use("/admin", express.static("./htmlAdmin"));

// Ç°¶Ë
app.use("/", require("./controllers/webControllers/_allRouters"));

// ºó¶Ë
app.use("/admin", require("./controllers/adminControllers/_allRouters"));

// api
app.use("/api", require("./controllers/apiControllers/_allRouters"));


// 404  page
app.use(function (req, res) {
    res.status(404).send("404 Request Page Not Found!");
   // res.end();
});


//  start listen server
app.listen(port, hostname, function () {
    console.log(`server run hostname ${hostname}:${port}`);
});



