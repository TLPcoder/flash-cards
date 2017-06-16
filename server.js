'use strict';
const PORT = 8000;
const path = require('path');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const flashCards = require('./routes/flashCards');
const users = require('./routes/users');
const indexPath = path.join(__dirname, '/src/public/index.html');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.get('/hello', (req,res)=> {
    res.json('hello world');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/flashcards', flashCards);
app.use('/users', users);

app.get('/', function(_, res) {
    res.sendFile(indexPath);
});
app.listen(PORT, function() {
    console.log('port', PORT);
});
