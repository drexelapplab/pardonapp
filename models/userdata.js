let mongoose = require('mongoose');

let UserDataSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    category: String
});

const UserData = module.exports = mongoose.model('UserData', UserDataSchema);

module.exports.getAllUsers = (callback) => {
    UserData.find(callback);
};

module.exports.addUser = (newUser, callback) => {
    newUser.save(callback);
};

module.exports.deleteUserById = (id, callback) => {
    let query = {_id: id};
    UserData.remove(query, callback);
};
