'use strict'

const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user');

function home(req, res) {
    res.status(200).send({
        message: 'Hola mundo desde el servidor de NodeJS'
    })
}

function pruebas(req, res) {
    res.status(200).send({
        message: 'Hola mundo desde el servidor de NodeJS'
    })
}

function saveUser(req, res) {
    const params = req.body;
    const user = new User();

    if(params.name && params.surname && params.nick && params.email && params.password) {
        user.name = params.name;
        user.surname = params.surname;
        user.nick = params.nick;
        user.email = params.email;
        user.role = 'ROLE_USER';
        user.image = null;

        bcrypt.hash(params.password, null, null, (err, hash) => {
            user.password = hash;
            user.save((err, userStored) => {
                if(err) return res.status(500).send({ message: 'Error al guardar el usuario' });
                if(userStored) {
                    res.status(200).send({ user: userStored });
                } else {
                    res.status(404).send({ message: 'No se ha registrado el usuario' });    
                }
            })
        });
    } else {
        res.status(200).send({
            message: 'Envía todos los campos necesarios'
        })
    }
}

module.exports = {
    home,
    pruebas,
    saveUser
}