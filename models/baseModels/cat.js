﻿const mongoose = require("mongoose");
const config = require("../../config");
const Schema = mongoose.Schema;
let db = mongoose.createConnection(config.dburl + config.dbname);

var CatSchema = new Schema({
    name: String,
    age: Number,
    sex: String,
    user_id: String
});

var Cat = db.model("Cat", CatSchema);

module.exports = Cat;