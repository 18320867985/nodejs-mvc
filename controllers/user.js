const app = require("../server");
const path = require("path");
const urlPath = require("../libs/urlPath");

module.exports = function () {

    urlPath.controller = "user";

    // get
    var index = urlPath.getPath("index");
    app.get(urlPath.root + index, function (req, res) {
        res.render(index, { lists: ["aaa2", "bbbb2"] });
    });

    var news = urlPath.getPath("news");
    app.get(urlPath.root + news, function (req, res) {
        res.render(news, { lists: ["aaa2", "bbbb2"] });

    });




};