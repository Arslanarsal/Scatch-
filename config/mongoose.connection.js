const mongoose = require('mongoose')
const config = require('config');

const debug = require("debug");
const dbgr = debug("development:mongoose");

mongoose
    .connect(`${config.get("MONGOOSE_URL")}/scatch`)
    .then(function () {
        dbgr("Database connected")
    }
    ).catch(function (err) {
        dbgr("Error on Database connection  " + err);
    })

module.exports = mongoose.connection;