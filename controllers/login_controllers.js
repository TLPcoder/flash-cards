'use strict';
const knex = require('../knex');
var exports = module.exports = {};

exports.login = (req,res) => {
    var body = req.body;
    knex('users')
    .where('users.email', body.email)
    .where('users.hashed_password', body.password)
    .then((data) => {
        console.log(data);
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
};
