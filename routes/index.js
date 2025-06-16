const express = require('express')
const router = express.Router();
const userScheme = require('../models/user.model.js')
const bcrypt = require('bcrypt');
const { has } = require('config');
const { usercontroller, loginController } = require('../controllers/registre.controller.js')


router.post('/register', usercontroller);
router.post("/login", loginController)

module.exports = router;
