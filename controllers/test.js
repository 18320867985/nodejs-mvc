const app = require("../server");
const path = require("path");
const routerPath = require("../libs/routerPath");
var formidable = require('formidable');
var fs = require("fs");
//var BLL = require("../BLL/bll");

routerPath.controller = "test";

module.exports = function () {

    // get
    var index = routerPath.setRouter("index");
    app.get([index.root, index.routerUrl()], function (req, res) {
        res.render(index.htmlUrl(), { lists: { name:"hqs",age:30} });
    });

    // 上传文件
    var upload = routerPath.setRouter("upload");
    app.post(upload.routerUrl(), function (req, res) {
        
        var form = new formidable.IncomingForm();
        form.encoding = "utf-8";   // encoding
        form.maxFieldsSize = 200 * 1024 * 1024; // max 20M
        var fileDir = "public/img"
        form.uploadDir = "./"+fileDir;
        form.keepExtensions = true;
        form.multiples = false;

        form.parse(req, function (err, fields, files) {
            if (files) {
                var keys = Object.keys(files);
                var file = files[keys[0]];
                var ext = path.extname(file.path);
                var filename = fileDir+"/"+ new Date().getTime() + ext;
                var newfilname = path.join(__dirname, "../" + filename);

                fs.rename(file.path, newfilname, function () {
                    if (err) {
                        throw err;
                    }
                    res.json({
                        url: filename,
                        success: 1
                    });
                });
              
            }
        });

        //res.render(index.htmlUrl(), { lists: { name: "hqs", age: 30 } });
    });

    

};

