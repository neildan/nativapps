require('dotenv').config();

module.exports = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_DATABASE: process.env.DB_DATABASE || 'nativapps',
    DB_USERNAME: process.env.DB_USERNAME || null,
    DB_PASSWORD: process.env.DB_PASSWORD || null
  }