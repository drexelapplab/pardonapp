require('rootpath')();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const apiRouter = require('./controllers/formController');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');
const port = 3000;

mongoose.connect('mongodb://ryanwon7:maplenets8@ds253831.mlab.com:53831/pardon-app-testing', {useNewUrlParser: true})
    .then(() =>  console.log('connection to mLabs database successful.'))
    .catch((err) => console.error(err));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRouter);

app.use(jwt());

app.use('/users', require('./users/users.controller'));



app.use(errorHandler);

const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
