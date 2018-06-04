
const app = require("../server");
const path = require("path");
const routerPath = require("../libs/routerPath");

module.exports = function () {
    routerPath.controller = "home";

    // get
    var index = routerPath.setRouter("index");
    app.get([index.root, index.routerUrl], function (req, res) {

        res.render(index.htmlUrl, { lists: ["aaa", "bbbb"] });
    });

    //get
    var news = routerPath.setRouter("news");
    app.get(news.routerUrl, function (req, res) {
        res.render(news.htmlUrl, { lists: ["aaa", "bbbb"] });
     
    });

    
   

};

