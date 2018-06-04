let urlPath = {
    root: "/",
    controller: "home",
    action: "index",
    getPath(...args) {

        if (args.length === 1) {
            this.action = args[0];
        }
        if (args.length === 2) {
            this.controller = args[0];
            this.action = args[1];
        }

        return this.controller + "/" + this.action;
    }
}

module.exports = urlPath;