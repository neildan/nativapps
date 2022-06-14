const express = require('express');
const cors = require("cors");
const api = require('./routes/apiRouter')
const app = express()

require('./db/config');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use('/api', api)

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.listen(3000, () => {
    console.log('Servidor corriendo')
})