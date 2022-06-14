const { Sequelize } = require('sequelize');

const PatientModel = require('../models/patient')

const sequelize = new Sequelize('nativapps', 'root', 'root', {
    host: '172.17.0.2',
    dialect: 'postgres',
    logging: false
});

sequelize.sync({
    force: false
}).then(() => {
    console.log("Tables sync")
})

const Patient = PatientModel(sequelize, Sequelize);

module.exports = {
    Patient
}