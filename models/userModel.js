const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true,"userName is required"],
    },
    email: {
        type: String,
        required: [true,"userEmail is required"],
        unqiue: [true,"Email is already exist"],
    },
    password: {
        type: String,
        required: [true,"Password is require"],
    },
}, 
{
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);