'use strict';
const PORT = 3000;
const path = require('path');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const indexPath = path.join(__dirname, 'index.html');
const publicPath = express.static(path.join(__dirname, 'public'));
const flashCards = require('./routes/flashCards');
const users = require('./routes/users');

app.use('/public', publicPath);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', function(_, res) {
    res.sendFile(indexPath);
});
app.get('/working', function(_, res) {
    res.send('working');
});

app.use('/flashcards', flashCards);
app.use('/users', users);

app.listen(PORT, function(){
    console.log('port',PORT);
});
