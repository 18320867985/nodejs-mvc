
const app = require("../server");
const path = require("path");
const routerPath = require("../libs/routerPath");
const db = require("../libs/dbHelp");
var MongoClient = require('mongodb').MongoClient;
var config = require('../config');
var url = config.dburl;


routerPath.controller = "home";
module.exports = function () {
    
    // get
    var index = routerPath.setRouter("index");
    app.get([index.root, index.routerUrl()], function (req, res) {
        db.insertMany("user", [{ name: "upus22", age: 27 }, { name: "upus22", age: 28 }]).then(function (data) {
            console.log(data);
        });
        db.findByPaging("user", { name: "upus2" },0,1).then(function (data) {
            res.send(data);
        });
      //  res.render(index.htmlUrl(), { lists: ["aaa", "bbbb"] });
    });


    //get
    var news = routerPath.setRouter("news");
    app.get(news.routerUrl(), function (req, res) {
        dbHelp.setDbName("order");
        dbHelp.insert("order", { name: "order", age: 23 }, function (err, data) {
            res.send(data);
        });
       // res.render(news.htmlUrl(), { lists: ["aaa", "bbbb"] });
     
    });
    
    app.get("/test", function (req, res) {
        console.log(  config)
        MongoClient.connect(url, function (err, client) {
            //client.db("upus").collection("user").insertMany([{ name: "upus", age: new Date().toTimeString() }, { name: "upus2", age: new Date().toTimeString() }], function (err, data) {
            //    res.send(data);
            //    client.close();
            //});
            var db = client.db("upus").collection("user");
            //db.find({ name: "upus" }).limit(5).skip(10).toArray(function (err, data) {
            //    res.send(data);
               //client.close();
            //})
            db.updateMany({ name: "upus2" },
                {
                    $set: {
                        age: 334,
                        sex: "男"
                    }
                }).then(function (data) {
                    console.log("data1");
                   // res.json(JSON.parse(data).n);
                    client.close();
                    console.log(client.isConnected())
                   
                }).catch(function (err) {
                    //client.close();
                    throw err;
                });

          
            db.find({ name: "upus2" }).toArray().then(function (data) {
                console.log(client.isConnected())
                console.log("upus2");
                res.send(data);
                client.close();

            }).catch(function (err) {
                client.close();
                throw err;
             });
            //db.deleteOne({ name: "upus" }, function (err, data) {
            //if (err) {
            //    client.close();
            //    throw err;
            //}
            //    res.send(data);
            //    client.close();

            //});

            //db.deleteOne({ name: "upus" }).then(function (data) {
            //    res.send(data);
            //    client.close();
            //}).catch(function (err) {
            //    client.close();
            //     throw err;
            //});

            //db.deleteOne({ name: "upus2" }).then(function (data) {
            //    res.send(data);
            //    client.close();
            //}).catch(function (err) {
            //    client.close();
            //    throw err;
            //});

            //db.update({ name: "upus2" },
            //    {
            //        $set:{
            //            age: 31,
            //            sex:"男"
            //        }
            //    }, function (err, data) {
            //if (err) {
            //    client.close();
            //    throw err;
            //}
            //        res.send(data);
            //        client.close();
            //    });

            //db.update({ name: "upus2" },
            //    {
            //        $set: {
            //            age: 21,
            //            sex: "男"
            //        }
            //    }).then(function (data) {
            //        res.send(data);
            //        client.close();
            //    }).catch(function (err) {
            //        client.close();
            //        throw err;
            //    });


//            db.updateMany({ name: "upus2" },
//                {
//                    $set: {
//                        age: 33,
//                        sex: "男"
//                    }
//                }).then(function (data) {
//                    console.log("data");
//                    res.json(JSON.parse(data).n);
////client.close();
//                }).catch(function (err) {
//                    //client.close();
//                    throw err;
//                });


        
           
         
        });

    });

    
};

