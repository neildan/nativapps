const { Patient } = require('../db/config')

class PatientBusiness {
  async create(body) {
    try {
      let find = await Patient.findAll({
        where: {
          id: body.id
        }
      });
      if(find.length > 0) throw "Patient already exists"
      let patient = await Patient.create(body)
      return patient.dataValues;
    } catch(e){
      throw e;
    }
  }
}

module.exports = PatientBusiness;