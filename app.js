const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const port = 3000;
const home = require('./controllers/home');

mongoose.connect('mongodb://ryanwon7:maplenets8@ds253831.mlab.com:53831/pardon-app-testing')

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('home', home)

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Invalid page");
})
app.listen(port, () => {
    console.log(`Starting the server at port ${port}`);
});
app.use('/home',home);