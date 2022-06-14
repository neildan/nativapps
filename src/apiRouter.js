const router = require('express').Router()

const apiPatientRouter = require('./routes/PatientRouter')

router.use('/patient', apiPatientRouter)

module.exports = router