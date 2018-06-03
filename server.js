'use strict';

var hostname = "127.0.0.1";
var port = 3000;
var express = require('express');
var app = module.exports = express();
var renderHtml = require("./libs/renderHtml");
var bodyParser = require('body-parser');

app.response.constructor.prototype.renderHtml = renderHtml.render;
app.set('views', './views');
app.use("/public", express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded



var fs = require("fs");


//// 该路由使用的中间件
//app.use(function timeLog(req, res, next) {
//    console.log('Time: ', Date.now());
//    next();
//});
//// 定义网站主页的路由
//app.get('/', function (req, res) {
//    res.send('Birds home page');
//});
//// 定义 about 页面的路由
//app.get('/about', (req, res)=>{
//    res.send('About birds');
//});

// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
//app.use('/user/:id', function (req, res) {
//    var id = req.params.id || 0;
//    res.send(id.toString());
//});
//app.get("/", function (req, res) {

//    //app.renderHtml(res,"/template.html");
    
//    //syancReadFile("/views/template.html").then(function (data) {
//    //    res.send(data);
//    //});
   

//});

    var syancReadFile = async function (path) {
        var result1 = await readFile(path).then(function (data) {
        return data;
    }).catch();

    return result1;

} 

function readFile(path) {
    var promise = new Promise((resolve, reject) => {
        fs.readFile(__dirname+"/"+ path, { encoding:"utf-8" }, function (err, data) {
            if (data) {
                resolve(data);
            } else {
                reject("readFile error");
            }
        });

        //var arrs = [];
        //var rs = fs.createReadStream(__dirname + "/views/template.html");
        //rs.on("data", function (byte) {
        //    arrs.push(byte);
        //});

        //rs.on("end", function () {
        //    var buffer = Buffer.concat(arrs);
        //    if (arrs.length === 0) {
        //        reject("readFile error");
        //    }
        //    else {

        //        resolve(buffer.toString("utf-8"));
        //    }
       
        //});

    });


    return promise;
}






/*注册控制器*/
require("./controllers")();

// 404 
app.use(function (req, res) {
    res.status(404).send("404 not found page");
});


// 服务器监听端口
app.listen(port, hostname, function () {
    console.log(`server run hostname ${hostname}:${port}`);
});


