const router = require('express').Router();
const PatientMiddleware = require('../middlewares/PatientMiddleware')
const PatientController = require("../controllers/PatientController")

router.use('/patient', [PatientMiddleware.validate], PatientController)

module.exports = router