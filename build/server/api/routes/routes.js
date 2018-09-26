"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../../modules/user/routes");
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.router = new routes_1.default;
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/api/users').get(this.router.index);
        app.route('/api/users/create').post(this.router.create);
        app.route('/api/users/:id').get(this.router.findOne);
        app.route('/api/users/:id').put(this.router.update);
        app.route('/api/users/:id').delete(this.router.delete);
    };
    return Routes;
}());
exports.default = Routes;
