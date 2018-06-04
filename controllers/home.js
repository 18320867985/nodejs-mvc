
const app = require("../server");
const path = require("path");
const routerPath = require("../libs/routerPath");

module.exports = function () {

    routerPath.controller = "home";
    // get
    var index = routerPath.getPath("index");
    app.get(routerPath.root + index, function (req, res) {
       
        res.render(index, { lists: ["aaa", "bbbb"] });
     

    });

    var news = routerPath.getPath("news");
    app.get(routerPath.root + news, function (req, res) {
        res.render(news, { lists: ["aaa", "bbbb"] });
     
    });

    
   

};

