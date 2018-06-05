/*路由控制器的路径*/

let urlPath = {
    root: "/",
    controller: "home",
    action: "index",
    setRouter(...args) {
        var root = this.root;
        var action = this.action;
        var controller = this.controller;
        if (args.length === 1) {
            action = args[0];
        }
        if (args.length === 2) {
            controller = args[0];
            action = args[1];
        }
    
        return {
            root: root,
            controller: controller,
            action: action,
            routerUrl: (url) => {
                if (typeof url === "string") {
                    return root + url.replace(/^\/+/, "");
                }
                return root + controller + "/" + action
            },
            htmlUrl: (url) => {
                if (typeof url === "string") {
                    return url.replace(/^\/+/, "");
                }
                return controller + "/" + action;
            }
        }
    }
}

module.exports = urlPath;