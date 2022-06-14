
const PatientController = require("../controllers/PatientController");
const PatientMiddleware = require("../middlewares/PatientMiddleware");

class PatientRouter {
    constructor(app) {
        this.endPoint = `/patient`;
        this.middleware = new PatientMiddleware();
        this.controller = new PatientController();
        app.route(this.endPoint)
            .post(this.middleware.validate.bind(this.middleware))
            .post(this.controller.create.bind(this.controller));
    }
}

module.exports.PatientRouter = PatientRouter;