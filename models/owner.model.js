const mongoose = require('mongoose');



const ownerScheme = mongoose.Schema({
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

    products: {
        type: Array,
        default: [],
    },
    Picture: {
        type: String,

    }

})


module.exports = mongoose.model("owner", ownerScheme);