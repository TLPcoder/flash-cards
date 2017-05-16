'use strict';
const knex = require('../knex');
var exports = module.exports = {};

exports.login = (req, res) => {
    var body = req.body;
    knex('users').where('users.email', body.email).where('users.hashed_password', body.password).then((data) => {
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
    console.log(req.body);
    var body = req.body;
    knex('users')
    .where('users.email', body.email)
    .then((data) => {
        if(data.length === 0){
            createUser(body, res);
        }else{
            res.json(
                {emailUsed: true}
            );
        }
    });
};

function createUser(body, res){
    knex('users').insert({
        first_name:body.first_name,
        last_name:body.last_name,
        email: body.email,
        hashed_password: body.password,
        age: body.age
    }).then((data) => {
        if(data){
            res.json({
                newUser:true,
                data:data
            });
        }
    }).catch((err)=>{
        console.log(err);
    });
}
