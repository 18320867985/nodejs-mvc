﻿var model = require("../../models/baseModels/_models");

var Cat = class Cat {
    async find(id) {
        var res = await model.Cat.findById(id).then(function (data) { return data || ""; });
        var res2 = await model.Cat.deleteMany({ _id: res._id }).then(function (data) { return data });
        return res2;
    }
    create(obj, callback) {
        model.Cat.create(obj, callback);
    }

}

module.exports = Cat;