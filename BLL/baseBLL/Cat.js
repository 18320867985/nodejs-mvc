
var model = require("../../model/models");

var Cat = class Cat {
    async find(id) {
        var res = await model.Cat.findById(id).then(function (data) { return data || ""; });
        var res2 = await model.Cat.deleteMany(res).then(function (data) { return data });
        return res2;
    }

}
module.exports = Cat;