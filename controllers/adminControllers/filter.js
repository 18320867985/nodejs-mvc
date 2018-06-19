
/*
 admin过滤器
 */

const app = require("./_allRouters");

module.exports.admin= function () {

    app.use(function (req, res, next) {
        if (req.session.login === true) {
            next();
        } else {
            res.redirect("/home/index");
            return;
        }

    });
}