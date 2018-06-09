const app = require("../server");
const path = require("path");
const routerPath = require("../libs/routerPath");
//var BLL = require("../BLL/bll");

routerPath.controller = "test";

module.exports = function () {

    // get
    var index = routerPath.setRouter("index");
    app.get([index.root, index.routerUrl()], function (req, res) {
      
        res.render(index.htmlUrl(), { lists: { name:"hqs",age:30} });
    });


    

};

