const router = require('express').Router()
const PatientBusiness = require("../business/PatientBusiness");

router.post('/', async(req, res) => {
    var response = {
        data: null,
        message: "Execution was successful",
        code: 200
    };
    try {
        response.data = await new PatientBusiness().create(req.body);
    }catch (error) {
        response.message = error;
        response.code = 500;
    }
    return res.status(response.code).send(response);
})

module.exports = router;