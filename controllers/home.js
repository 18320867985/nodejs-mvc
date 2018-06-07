
const app = require("../server");
const path = require("path");
const routerPath = require("../libs/routerPath");
var BLL = require("../BLL/bll");




routerPath.controller = "home";
module.exports = function () {
    
    // get
    var index = routerPath.setRouter("index");
    app.get([index.root, index.routerUrl()], function (req, res) {
        var cat = new BLL.Cat();
         cat.find("5b1892ba47658c2b5c706963").then(function (data) {
            console.log(data);
        });

      //  res.render(index.htmlUrl(), { lists: ["aaa", "bbbb"] });
    });


    //get
    var news = routerPath.setRouter("news");
    app.get(news.routerUrl(), function (req, res) {
       
        res.render(news.htmlUrl(), { lists: ["aaa", "bbbb"] });
     
    });
    
    app.get("/test", function (req, res) {
      
    });

    
};

