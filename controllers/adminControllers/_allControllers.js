/*admin注册控制器*/

module.exports = function () {

    // 过滤器
    require("./filter").admin(); 
    // controller home
    require("./home")();



 
}

