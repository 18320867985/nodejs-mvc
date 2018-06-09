const mongoose = require("mongoose");
const config = require("../../config");
const Schema = mongoose.Schema;
let db = mongoose.createConnection(config.dburl + config.dbname);

var CatSchema = new Schema({
    name: String,
    age: Number,
    sex: {
        type: Number, required: true, min: [20, "error"], max:[40,"max 40"]
    }
});

CatSchema.methods.test = function(){

    console.log(this.name+"99999999");
};

var Cat = db.model("Cat", CatSchema);

module.exports = Cat;