const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        fullName: {type: String, require: true},
        username: {type: String, require: true},
        password: {type: String, require: true},
        avatar: {type: String, require: true}
    },
    {timestamps: true}
);

const user = mongoose.model('User', userSchema);

module.exports = user;