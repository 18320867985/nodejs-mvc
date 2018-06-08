const app = require("../server");
const path = require("path");
const routerPath = require("../libs/routerPath");

module.exports = function () {

    routerPath.controller = "user";

    app.use(routerPath.root, function (req, res,next) {
        if (!req.session.login) {
            res.redirect("/home/index");
        } else {
            next();
        }

    });

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