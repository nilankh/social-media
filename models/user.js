const mongoose = require('mongoose');

const userScehma = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
    // ye timestamp show krega created at signed in at update at
});

const User = mongoose.model('User', userScehma);

module.exports = User;