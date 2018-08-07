const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const home = require('./controllers/home');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

mongoose.connect('mongodb://ryanwon7:maplenets8@ds253831.mlab.com:53831/pardon-app-testing', {useNewUrlParser: true});

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/users', require('./users/users.controller'));

//app.use(jwt());

//app.use('home', home)

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Invalid page");
})
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

app.use('/home',home);