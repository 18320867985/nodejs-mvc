
/*api*/
var express = require("express");
var app = module.exports = express.Router();
const routerPath = require("../../libs/routerPath");
routerPath.area = "api";
app.routerPath = routerPath;

/*constrollers*/
require("./_apiControllers")();