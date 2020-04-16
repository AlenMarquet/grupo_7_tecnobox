const express = require('express');
const app = express();
const path = require('path');
const homeRouter = require('./routes/home');

app.listen(3000, function(){console.log('Running port 3000');});

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));


app.use('/', homeRouter)