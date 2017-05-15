'use strict';
const PORT = 3000;
const path = require('path');
const express = require('express');
const app = express();
const indexPath = path.join(__dirname, 'index.html');
const publicPath = express.static(path.join(__dirname, 'public'));
const flashCards = require('./routes/flashCards');

app.use('/public', publicPath);
app.get('/', function(_, res) {
    res.sendFile(indexPath);
});
app.get('/working', function(_, res) {
    res.send('working');
});

app.use('/flashcards', flashCards);

app.listen(PORT, function(){
    console.log('port',PORT);
});
