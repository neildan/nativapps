const { Patient } = require('../db/config')

class PatientBusiness {
  async create(body) {
    try {
      let patient = await Patient.create(body)
      return patient.dataValues;
    } catch(e){
      throw e;
    }
  }
}

module.exports = PatientBusiness;