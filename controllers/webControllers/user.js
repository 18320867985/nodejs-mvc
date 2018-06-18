const app = require("./_allRouters");
const routerPath = require("./_routerPath");
var BLL = require("../../BLL/baseBLL/_bll");

routerPath.controller = "user";
module.exports = function () {

    // get
    var index = routerPath.setRouter();
    app.get(index.routerUrl(), function (req, res) {
      
        res.render(index.htmlUrl(), { lists: ["aaa222", "bbbb222"] });
    });

    var news = routerPath.setRouter("news");
    app.get(news.routerUrl(), function (req, res) {
        res.render(news.htmlUrl(), { lists: ["aaa222", "bbbb222"] });

    });




};