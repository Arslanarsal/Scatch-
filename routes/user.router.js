const express = require('express');
const router = express.Router();
const { usercontroller, loginController , logout } = require('../controllers/registre.controller.js')

router.get('/' , function(req , res){
    res.send("every thing is fine in User");
})

router.get('/login'  , function(req , res){
    let error = ""
    console.log(req.flash())
    if (req.flash()) {
        error = req.flash("error");
    }
    res.render('user-login' , {error})
})

router.post('/register', usercontroller);
router.post("/login", loginController);
router.post("/logout", logout);

module.exports = router