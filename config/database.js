const config = require('./config/database');

module.exports = {
    database: 'mongodb://localhost:27017/home'
}

mongoose.connect(config.database);