
const app = require("../server");
const path = require("path");
const urlPath = require("../libs/urlPath");

module.exports = function () {

    urlPath.controller = "home";
    // get
    var index = urlPath.getPath("index");
    app.get(urlPath.root + index, function (req, res) {
       
        res.render(index, { lists: ["aaa", "bbbb"] });
     

    });

    var  news = urlPath.getPath("news");
    app.get(urlPath.root + news, function (req, res) {
        res.render(news, { lists: ["aaa", "bbbb"] });
     
    });

    
   

};

