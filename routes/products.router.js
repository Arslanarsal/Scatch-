const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleWares/isLoggedIn.js')

router.get('/', function (req, res) {
    res.send("every thing is fine in product");
})


module.exports = router