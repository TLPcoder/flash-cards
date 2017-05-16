"use strict";
const express = require('express');
const router = express.Router();
const controller = require('../controllers/login_controllers');
//

router.get('/', (req,res) => {
    res.json('hello');
});

router.post('/login', controller.login);

router.post('/create-user', controller.createUser);

module.exports = router;
