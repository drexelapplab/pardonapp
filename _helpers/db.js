//requiring config.json file(contains secret and connection string for mongoose) and mongoose module
const config = require('../config.json');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString, {useNewUrlParser: true}); //Straight connection is deprecated, uses new url parser now
mongoose.Promise = global.Promise;

//sets requirement for a user(which is laid out in user.model0
module.exports = {
    User: require('../users/user.model'),
}

