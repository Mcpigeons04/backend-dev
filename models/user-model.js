// //schema defines the strucutre of the documents within a collection,it specifies the fields,their types and any additional constraints or validations
// // models/user-model.js

// const mongoose = require('mongoose');
// const bcrypt=require("bcryptjs");

// const jwt=require("jsonwebtoken");

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     phone: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     isAdmin: {
//         type: Boolean,
//         default: false // Set default value to false
//     }
// }, 


// {
//     timestamps: true // Adds createdAt and updatedAt fields
// });


// userSchema.methods.generateToken = async function() {
//     try {
//         return jwt.sign(
//             {
//                 userId: this._id.toString(),
//                 email: this.email,
//                 isAdmin: this.isAdmin,
//             },
//             process.env.JWT_SECRET_KEY,
//             {
//                 expiresIn: "30d",
//             }
//         );
//     } catch (error) {
//         console.error(error);
//     }
// };//instance method




// // Correctly create and export the model
// const User = mongoose.model('User', userSchema);

// module.exports = User;





const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: "30d",
        });
    } catch (error) {
        console.error(error);
    }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
