let mongoose = require('mongoose');

let UserDataSchema = mongoose.Schema({
    firstname: String,
    middlename: String,
    lastname: String,
    street: String,
    city: String,
    state: String,
    zipcode: String
});

const Formdata1 = module.exports = mongoose.model('Formdata1', UserDataSchema);

module.exports.getAllUsers = (callback) => {
    Formdata1.find(callback);
};

module.exports.addUser = (newUser, callback) => {
    newUser.save(callback);
};

module.exports.deleteUserById = (id, callback) => {
    let query = {_id: id};
    Formdata1.remove(query, callback);
};
