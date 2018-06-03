const app = require("../server");
var controller = "/user";

module.exports = function () {

    // get
    app.get([controller,controller + "/index"], function (req, res) {

        // res.send(`name:${req.params.name}==id:${req.params.id}`);
        res.renderHtml(res, controller + "/index", { lists: ["1111", "2222"] });
    });
    app.get(controller + "/news", function (req, res) {
        // res.send(`name:${req.params.name}==id:${req.params.id}`);
        res.renderHtml(res, controller + "/news.html", { lists: ["88888", "999999999"] });

    });
   
};