const config = require('./config.json');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    database: 'mongodb://ryanwon7:maplenets8@ds253831.mlab.com:53831/pardon-app-testing'
}

