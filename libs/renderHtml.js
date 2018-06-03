/*渲染 views html*/

"use strict";

const fs = require("fs");
const ejs = require("ejs");
const http = require("http");
const app = require("../server");

function getPromise(path, obj) {
    path = path || "";
    obj = obj || {};
    var promise = new Promise(function (resolve, reject) {
        path = path.toString().search(/.+\.html$/)!==-1 ? path : path + ".html";
        fs.readFile("./views/" + path, { encoding: "utf-8" }, function (err, data) {
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

var renaderHtml=async function (path, obj) {
    var result = await getPromise(path, obj).then(function (data) {
        return data;
    }).catch();

    return result;
}

function render(res,path,obj) {
    renaderHtml(path, obj).then(function (data) {
        res.send(data);
    }, function (err) {
        res.send(err);
    });
}

module.exports = {
    render: render

}
