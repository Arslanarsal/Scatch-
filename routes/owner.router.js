const express = require("express");
const ownerScheme = require('../models/owner.model.js');
const productScheme = require('../models/product.model.js')
const upload = require('../config/multer-upload.js')
const router = express.Router();

// router.get('/', function (req, res) {
//     res.send("Every thing is fine in Owner")
// })

router.post("/create", async function (req, res) {

    try {
        const { fullName, password, email } = req.body;

        if (!fullName || !password || !email) {
            return res.status(400).send("All fields are required");
        }

        const existingUser = await ownerScheme.findOne({ email });

        if (existingUser) {
            return res.status(400).send("User with this email already exists");
        }

        const newUser = await ownerScheme.create({
            fullName,
            password,
            email,
        });

        res.status(201).send(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
    }


});


router.get("/createproduct", function (req, res) {
    let success = req.flash("success");
    res.render("createproducts", { success })
})


router.post("/createproduct", upload.single('image'), async function (req, res) {

    try {
        let { fullName, price, discount, bgColor, panelColor, textColor } = req.body
        let product = await productScheme.create({
            image: req.file.buffer,
            fullName, price, discount, bgColor, panelColor, textColor
        })

        req.flash("success", "Product has been created successfully")

        res.redirect('/owner/createproduct')
    } catch (error) {
        res.send("Error on creating products " + error.message)
    }
})





module.exports = router