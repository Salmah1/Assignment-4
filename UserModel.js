const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: false
        },
        password: {
            type: String,
            required: false
        },
        dob: {
            type: Date,
            required: false
        },
        avatar: {
            type: String,
            required: false
        },
        dateCreated: {
            type: Date,
            required: true,
            default: Date.now
        },
        subscription: {
            type: Boolean,
            required: false
        }
    }
);

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;