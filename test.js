
var fs = require("fs");

var path = require("path");

//function* test() {
//    var result = yield new Promise(function (resolve, reject) {
//        resolve("result1");

//    });
//    console.log(result)
//    var result2 = yield new Promise(function (resolve, reject) {
//        resolve("result2====" + result);

//    });
//    console.log(result2)
//    yield result2 + result;
//}


//var t1 = test();
//t1.next().value.then(function (data) {
//    console.log(data);
//    t1.next(data).value.then(function (data) {
//        console.log(data);
       
//    });
//});


//var path = require("path");
//var fs = require("fs");

//    function rd(ulr) {
//        return new Promise(function (resolve, reject) {
//            var p = path.join(__dirname, ulr);
//            fs.readFile(p, "utf-8", function (err, data) {
//                if (err) {
//                    throw new Error(err);
//                } else {
//                    resolve(data)
//                }
//                //  console.log(data)
//            });
//        });

//    }

//    var res = Promise.all([rd("./views/home/ul.html"), rd("./views/home/index.html"), rd("./views/home/news.html")]);
//    res.then(function (data) {
//        console.log(data[2]);
//    }).catch();



//var test = require("./test/test");
//test.test();

//// crypto  加密
//var crypto = require("crypto");
//var md5 = crypto.createHash("md5");

//var value = "123";
//var md5Value = md5.update(value).digest("base64").toLowerCase();
//console.log(md5Value);

var crypto = require("./libs/crypto");
var assert = require("assert");

var str = crypto.md5.md5ByString("123");
console.log(assert.deepStrictEqual("2", "2"));

Buffer

