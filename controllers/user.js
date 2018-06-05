const app = require("../server");
const path = require("path");
const routerPath = require("../libs/routerPath");

module.exports = function () {

    routerPath.controller = "user";
   
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