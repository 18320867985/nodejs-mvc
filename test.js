var model = require("./model/models");

model.Cat.find({ name: "hqs" }).where("age").exec().then(function (data) {
    console.log(data);
});
 
var cat = new model.Cat({ name: "mmm2", age: 12,sex:20 });

cat.save();
