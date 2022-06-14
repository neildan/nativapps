const { Sequelize } = require('sequelize');

const PatientModel = require('../models/patient')

const sequelize = new Sequelize('nativapps', 'root', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

sequelize.sync({
    force: false
}).then(() => {
    console.log("Tables sync")
}).catch((err) => {
    console.log('Unable to connect to the database:', err);
});

const Patient = PatientModel(sequelize, Sequelize);

module.exports = {
    Patient
}