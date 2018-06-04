/*注册控制器*/

module.exports = function () {

    // controller home
    require("./controllers/home")();

    // controller user
    require("./controllers/user")();

}

