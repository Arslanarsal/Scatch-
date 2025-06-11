const express = require('express');
const router = express.Router();

router.get('/' , function(req , res){
    res.send("every thing is fine in User");
})

module.exports = router