'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hola mundo desde el servidor de NodeJS'
    })
})

app.get('/pruebas', (req, res) => {
    res.status(200).send({
        message: 'Acción de pruebas en el servidor de NodeJS'
    })
})

module.exports = app;