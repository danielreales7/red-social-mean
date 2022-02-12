'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3800;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean_social')
        .then(() => {
            console.log('La conexión a la base de datos curso_mean_social se ha realizado correctamente')

            app.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:3800');
            });
        })
        .catch(err => console.log(err));