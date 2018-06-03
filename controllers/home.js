
const app = require("../server");
var controller = "/home";

module.exports = function () {

    // get
    app.get(controller + "/index", function (req, res) {
        
             // res.send(`name:${req.params.name}==id:${req.params.id}`);
        res.renderHtml(res, controller+"/index", { lists: ["a", "b"] });
        });
    app.get(controller + "/news", function (req, res) {
        // res.send(`name:${req.params.name}==id:${req.params.id}`);
        res.renderHtml(res, controller + "/index.html", { lists: ["a", "b"] });
       
    });
    // 
    app.post(function (req, res) {
        res.send("post--home");
    
    })

    app.put(function (req, res) {
            res.send("put--home");
    })

    app.delete(function (req, res) {
            res.send("delete--home");
            
    });

};

