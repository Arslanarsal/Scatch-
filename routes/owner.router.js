const express = require("express");
const ownerScheme = require('../models/owner.model.js');

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



module.exports = router