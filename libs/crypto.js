
// crypto  加密
var crypto = require("crypto");

module.exports.md5 = {

    md5ByString(value) {
        value = typeof value === "string" ? value: "";
        var md5 = crypto.createHash("md5");
        var md5Value = md5.update(value).digest("base64").toLowerCase();
        return md5Value;
    }

}
