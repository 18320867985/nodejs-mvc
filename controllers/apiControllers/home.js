const path = require("path");
const app = require("./_apiRouter");
const routerPath = require("../../libs/routerPath");
//var BLL = require("../BLL/bll");

routerPath.controller = "home";
module.exports = function () {
    
    // get
    var index = routerPath.setRouter("index");
    app.get(index.routerUrl(), function (req, res) {
        res.json({ api: "api" });
       
    });
    
};

