const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/scatch');


const userScheme = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
    },
    cards: {
        type: Array,
        default: [],
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    orders: {
        type: Array,
        default: [],
    },
    contact: {
        type: Number,
        required: true,
        unique: true
    },
    Picture: {
        type: String,

    }

})


module.exports = mongoose.model("user", userScheme);