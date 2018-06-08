
const app = require("../server");
const path = require("path");
const routerPath = require("../libs/routerPath");
//var BLL = require("../BLL/bll");

routerPath.controller = "home";
module.exports = function () {
    
    // get
    var index = routerPath.setRouter("index");
    app.get([index.root, index.routerUrl()], function (req, res) {
       // var cat = new BLL.Cat();
        //cat.create({ name: "hqs", age: 12 }, function (err, data) {
        //    data.age = 28;
        //    data.save();
        //    console.log(data);
        //});
       // req.session.cookie.
        
        res.render(index.htmlUrl(), { lists: ["aaa", "bbbb"] });
    });


    //get
    var news = routerPath.setRouter("news");
    app.get(news.routerUrl(), function (req, res) {
       
        res.render(news.htmlUrl(), { lists: ["aaa", "bbbb"] });
     
    });

    app.post(index.routerUrl(), function (req, res) {
        var body = req.body;
       
        req.session.login = true;
        res.redirect("/user/news");
        res.end();
    });


    

    
};

