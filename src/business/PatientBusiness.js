const { Patient } = require('../db/config')

class PatientBusiness {

    constructor(body) {
      this.body = body;
    }

    async create() {
        let patient = await Patient.create(req.body)
        return patient;
    }
}

module.exports.PatientBusiness = PatientBusiness;