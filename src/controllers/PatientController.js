const PatientBusiness = require("../business/PatientBusiness");

class PatientController {
    async create(req, res) {
        var code = 200;
        var response = {
            data: null,
            message:null
        };
        try {
            response.data = await new PatientBusiness(req.body).create();
            response.message = "Execution was successful";
        }catch (error) {
            code = 500;
            response.message = error;
        }
        return res.status(code).send(response);
    }
}

module.exports.PatientController = PatientController;