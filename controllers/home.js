
const app = require("../server");
const path = require("path");
const routerPath = require("../libs/routerPath");
const MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/upus';

routerPath.controller = "home";
module.exports = function () {
    
    // get
    var index = routerPath.setRouter("index");
    app.get([index.root, index.routerUrl()], function (req, res) {

        MongoClient.connect(url, function (err, client) {
            if (err) {
                console.error(err);
                return;
            } else {
                console.log("Connected correctly to server");

                // 调用db对象的collection获得collection
                var collection = client.db.collection("user");
                
                db.close();
            }
        })


        res.render(index.htmlUrl(), { lists: ["aaa", "bbbb"] });
    });






    //get
    var news = routerPath.setRouter("news");
    app.get(news.routerUrl(), function (req, res) {
        res.render(news.htmlUrl(), { lists: ["aaa", "bbbb"] });
     
    });

    
   

};

