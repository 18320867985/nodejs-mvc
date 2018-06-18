
const app = require("./_mainRouter");
const routerPath = require("./_routerPath");
var BLL = require("../../BLL/baseBLL/_bll");

routerPath.controller = "home";
module.exports = function () {
    
    // get
    var index = routerPath.setRouter("index");
    app.get( index.routerUrl(), function (req, res) {
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

    //get
    var ul = routerPath.setRouter("ul");
    app.get(ul.routerUrl(), function (req, res) {

        res.render(ul.htmlUrl(), { lists: ["hqs", "js高手"] });

    });

    app.post(index.routerUrl(), function (req, res) {
        var body = req.body;
       
        req.session.login = true;
        res.redirect("/user/news");
        res.end();
    });


    

    
};

