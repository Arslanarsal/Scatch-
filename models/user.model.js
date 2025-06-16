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
    },
    password: {
        type: String,
        required: true,
    },
    cards: {
        type: Array,
        default: [],
    },

    orders: {
        type: Array,
        default: [],
    },
    contact: {
        type: Number,
        required: true,
    },
    Picture: {
        type: String,

    }
})


module.exports = mongoose.model("user", userScheme);