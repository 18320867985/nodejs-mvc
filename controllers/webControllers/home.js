
const app = require("./_allRouters");
const routerPath = require("./_routerPath");
var BLL = require("../../BLL/baseBLL/_bll");

routerPath.controller = "home";
module.exports = function () {
    
    // get
    var index = routerPath.setRouter("index");
    app.get(index.routerUrl(), function (req, res) {
     
          res.render(index.htmlUrl(), { lists: ["aaa", "bbbb"]});
    });


    //get
    var news = routerPath.setRouter("news");
    app.get(news.routerUrl(), function (req, res) {
       
        res.render(news.htmlUrl(), { lists: ["aaa", "bbbb"] });
     
    });

    //get
    var ul = routerPath.setRouter("ul");
    app.get(ul.routerUrl(), function (req, res) {

        res.render(ul.htmlUrl(), { lists: ["hqs", "js高手"] });

    });

    app.post(index.routerUrl(), function (req, res) {
        var body = req.body;
      
        req.session.login = true;
        res.redirect("/admin/home/index");
        res.end();
    });
    
};

