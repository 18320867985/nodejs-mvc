
const mongoose = require("mongoose");
const config = require("../config");
let db = mongoose.createConnection(config.dburl + config.dbname);
const Schema = mongoose.Schema;

var User = new Schema({ name: String, date: Number });

var User = db.model("User", User);


