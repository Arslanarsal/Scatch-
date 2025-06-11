const mongoose = require('mongoose');

const productScheme = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    discount: {
        type: Number,
        default : 0,
    },
    bgColor: {
        type: String,
        default: "Black",
    },
    panelColor: {
        type: String,
        default: "red"
    },
    textColor: {
        type: String,
        default: "Gray",
    },
    image: {
        type: String,
        required: true,
    }


})


module.exports = mongoose.model("product", productScheme);