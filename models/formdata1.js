let mongoose = require('mongoose');

let UserDataSchema = mongoose.Schema({ //current outline for the userdata(can be expanded, currently is set to the answers of form page 1)
    firstname: String,
    middlename: String,
    lastname: String,
    street: String,
    city: String,
    state: String,
    zipcode: String
});

const Formdata1 = module.exports = mongoose.model('Formdata1', UserDataSchema);

module.exports.getAllUsers = (callback) => { //returns a list of each user information which is in a list(nested list)
    Formdata1.find(callback);
};

module.exports.addUser = (newUser, callback) => { //adds a user and their list of information to the database
    newUser.save(callback);
};

module.exports.deleteUserById = (id, callback) => { //delete a user and their information through id
    let query = {_id: id};
    Formdata1.remove(query, callback);
};
