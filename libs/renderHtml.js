/*渲染 views html*/

"use strict";

const fs = require("fs");
const ejs = require("ejs");
const http = require("http");
const app = require("../server");
const path = require("path");

let _view = "./views";
function setrenaderHtmlViewPath(viewPath) {
    _view = typeof viewPath === "string" ? viewPath : _view;
}

function getPromise(viewPath, obj) {
    viewPath = viewPath || "";
    obj = obj || {};
    var promise = new Promise(function (resolve, reject) {
        viewPath = viewPath.toString().search(/.+\.html$/) !== -1 ? viewPath : viewPath + ".html";
        fs.readFile(path.join(_view, viewPath), { encoding: "utf-8" }, function (err, data) {
            if (err) {
                reject("404 not found page");
            } else {
                var html = ejs.render(data, obj);
                resolve(html);

            }
        });
    });

    return promise;
   
}

var renaderHtml = async function (viewPath, obj) {
    var result = await getPromise(viewPath, obj).then(function (data) {
        return data;
    }).catch();

    return result;
}

function render(res, viewPath,obj) {
    renaderHtml(viewPath, obj).then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
}

module.exports = {
    setrenaderHtmlViewPath: setrenaderHtmlViewPath,
    render: render

}
