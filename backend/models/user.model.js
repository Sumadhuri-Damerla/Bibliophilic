const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        trim: true,
        required: true,
        minlength: 3
    },
    emailId: {
        type: String,
        required: true,
        trim: true,
    },
    contact: {
        type: Number,
        minlength: 10
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;