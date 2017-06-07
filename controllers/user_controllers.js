'use strict';
const knex = require('../knex');
var exports = module.exports = {};

exports.login = (req, res) => {
    var body = req.body;
    knex('users').where('users.email', body.email).where('users.hashed_password', body.hashed_password).then((data) => {
        if (data.length === 0) {
            res.json({
                user : false
            });
        } else {
            res.json({
                user:true,
                data:data
            });
        }
    }).catch((err) => {
        console.log(err);
    });
};

exports.createUser = (req,res) => {
    var body = req.body;
    knex('users')
    .where('users.email', body.email)
    .then((data) => {
        if(data.length === 0){
            return createUser(body);
        }else{
            return {emailUsed: true};
        }
    }).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
        res.json({
            user:false,
            err: err
        });
    });
};

exports.getUser = (req,res) => {
    knex('users').where('users.user_id', req.params.id)
    .then((data) => {
        res.json({
            user: true,
            data: data
        });
    }).catch((err) => {
        res.json({
            user:false,
            err: err
        });
    });
};


function createUser(body){
    return knex('users').returning('*').insert({
        first_name:body.first_name,
        last_name:body.last_name,
        email: body.email,
        hashed_password: body.hashed_password,
        age: body.age
    });
}
