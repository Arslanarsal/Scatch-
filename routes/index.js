const express = require('express')
const router = express.Router();
const { isLoggedIn } = require('../middleWares/isLoggedIn.js')
const productmodel = require('../models/product.model.js')




router.get('/shop', isLoggedIn, async function (req, res) {
    let products = await productmodel.find();
   
    res.render('shop' , {products});
})







module.exports = router;
