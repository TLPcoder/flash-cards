"use strict";
const express = require('express');
const router = express.Router();
const controller = require('../controllers/user_controllers');

router.post('/login', controller.login);

router.post('/create-user', controller.createUser);

router.get('/get-user/:id', controller.getUser);

module.exports = router;
