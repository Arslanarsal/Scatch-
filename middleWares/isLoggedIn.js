const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model.js')

const isLoggedIn = async function (req, res, next) {
    let token = req.cookies.token || "";
    if (!token) {
        req.flash("error", "Please login")
        return res.redirect('/user/login')
    }

    try {
        let data =  jwt.verify(token, process.env.JWT_TOKEN)

        let user = await userModel.findOne({ email: data.email }).select("-password")
        req.user = user;
        next();
    } catch (error) {
        res.send("Error On logginedIn MiddleWare " + error.message)
    }
}

module.exports = {isLoggedIn}