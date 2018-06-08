var model = require("./model/models");

model.Cat.findOne({ name: "hqs" }).then(function (data) {
    data.age = 44;
    data.save();
    console.log(data);
})