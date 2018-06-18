
const app = require("./_allRouters");
const routerPath = require("./_routerPath");
var BLL = require("../../BLL/baseBLL/_bll");

routerPath.controller = "home";
module.exports = function () {
    
    // get
    var index = routerPath.setRouter("index");
    app.get(index.routerUrl(), function (req, res) {
        res.json({ api: "api" });
       
    });
    
};

