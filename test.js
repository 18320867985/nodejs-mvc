//var model = require("../model/models");

//model.Cat.find({ name: "mmm2", age: { $gt: 10 } }, {age:0}).then(function (data) {
//    console.log(data);
//});
 
//var cat = new model.Cat({
//    name: "mmm2", age:"22", sex: 22
//});
//cat.save(function (err, data) {
//    if (err) {
//        console.log(err)
//        throw err;
//    }
//    console.log(data);
//})
//var err = cat.validateSync();
//if (err) {

//    throw err;
//}


//model.Cat.create(cat).then(function () {
//    error = cat.validateSync();
//    if (error) {
//        console.log("error");
//    } else {
//        console.log("success");
//    }

//    console.log("end");

//}).catch();

//model.Cat.findById(cat._id).then(function (data) {
//    console.log(data);
//    if (data === null) {
//        model.Cat.insertMany(cat).then(function (data) {
//            console.log(data);
//        });
//    } else {
//        model.Cat.updateOne({ _id: cat._id }, cat).then(function (data) { console.log(data); });
//    }
//});

//var o = null;
//model.Cat.findByIdAndUpdate(cat._id, cat).then(function (data) {

//    console.log(data);
//    o = data;
//    model.Cat.deleteOne(cat).then(function (data) {
//        console.log(data)
//        console.log("============")
//        console.log(o)
//        o.save();

//    });

    
//});

//model.Cat.find({}).distinct("age").then(function (data) {
//    console.log(data);
////});

//model.Cat.updateMany({ name: "mimi" }, { age: "22" }).then(function (data) {
//    console.log(data)
//});

//let arrs = [{ name: "mm1", age: 1 }, { name: "mm2", age: 2 }, { name: "mm3", age: 3 }, { name: "mm4", age: 4 }];
//let arrs2=arrs.map(function (item) {

//    return { name: "hqs" + item.name }
//});

//console.log(arrs2)

//var arrs2 = arrs.reduce(function (x, item, i) {
//    x.a += item.age;
//    x.b += item.name
//    return x;
//}, {a:0,b:"b"});

//console.log(arrs2)
//const path = require("path");

//console.log(path.join( __dirname , "../model/test.js"));

//var basename = path.extname('C:\\temp\\myfile.html');
//console.log(basename);
//console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux'));

//var m = Math.max(...[24, 4, 5, 6]);
//console.log(m);


//var http = require("http");

//var server=http.createServer((req, res) => {
//    res.writeHead(200, { "content-Type": "text/html" });
//    res.end("sever end");

//});

//server.listen(3000,"127.0.0.1",function () {
//    console.log("sever start port http:\\\\127.0.0.1:3000");
//});
//server.on("connection", function () {

//    console.log("concetion");
//});

//server.on("request", function () {

//    console.log("request");
//});

var path = require("path");
var fs = require("fs");


exports.test= function() {
    function rd(ulr) {
        return new Promise(function (resolve, reject) {
            var p = path.join(__dirname, ulr);
            fs.readFile(p, "utf-8", function (err, data) {
                if (err) {
                    throw new Error(err);
                } else {
                    resolve(data)
                }
                //  console.log(data)
            });
        });

    }

    var res = Promise.all([rd("../views/home/ul.html"), rd("../views/home/index.html"), rd("../views/home/news.html")]);
    res.then(function (data) {
        console.log(data);
    }).catch();
}

