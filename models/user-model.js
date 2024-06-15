//schema defines the strucutre of the documents within a collection,it specifies the fields,their types and any additional constraints or validations
// models/user-model.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

// Correctly create and export the model
const User = mongoose.model('User', userSchema);

module.exports = User;
