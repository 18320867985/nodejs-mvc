
const app = require("./_allRouters");
const routerPath = require("./_routerPath");
var BLL = require("../../BLL/baseBLL/_bll");

routerPath.controller = "home";
module.exports = function () {
    
    // get
    var index = routerPath.setRouter("index");
         app.get(index.routerUrl(), function (req, res) {
         res.render(index.htmlUrl(), { lists: ["登陆成功", "admin"] });
    });


    //get
    var news = routerPath.setRouter("news");
    app.get(news.routerUrl(), function (req, res) {
       
        res.render(news.htmlUrl(), { lists: ["news", "bbbb"] });
     
    });


};

