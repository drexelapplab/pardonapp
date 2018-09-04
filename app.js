require('rootpath')(); //for path merging
const express = require('express'); //used to create the backend, later declare app as express()
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const apiRouter = require('./controllers/formController');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');
const port = 3000; //port number when running the site

//have to use {useNewUrlParser: true} because connecting without it is deprecated
//current mongodb connection is set to mlabs, it is a free site. username and password are listed(ryanwon7, maplenets8)
mongoose.connect('mongodb://ryanwon7:maplenets8@ds253831.mlab.com:53831/pardon-app-testing', {useNewUrlParser: true})
    .then(() =>  console.log('connection to mLabs database successful.'))
    .catch((err) => console.error(err));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public'))); //the public directory contains all the built angular files
app.use('/api', apiRouter);

app.use(jwt()); //use of authorization, the use must be declared after the public directory declaration

app.use('/users', require('./users/users.controller'));



app.use(errorHandler);

const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
