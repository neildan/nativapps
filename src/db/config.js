const config = require('../../config');
const { Sequelize } = require('sequelize');

const PatientModel = require('../models/Patient')

const sequelize = new Sequelize(config.DB_DATABASE, config.DB_USERNAME, config.DB_PASSWORD, {
    host: config.DB_HOST,
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