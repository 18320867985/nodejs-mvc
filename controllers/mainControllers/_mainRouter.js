
/*前台*/
var express = require("express");
var app = module.exports = express.Router();
const routerPath = require("../../libs/routerPath");
routerPath.area = "main";
app.routerPath = routerPath;

/*constrollers*/
require("./_mainControllers")();