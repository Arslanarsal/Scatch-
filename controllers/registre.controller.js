
const userScheme = require('../models/user.model.js')
const bcrypt = require('bcrypt');



const usercontroller = async function (req, res) {
    try {
        const { fullName, password, email, contact } = req.body;

        if (!fullName || !password || !email) {
            return res.send("All fields are required");
        }

        //    await userScheme.deleteMany({});
        // console.log("All users deleted");
        // process.exit();
        // db.userScheme.dropIndex("contact_1")
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await userScheme.create({
            fullName,
            password: hash,
            email,
            contact
        });

        res.send(user);
    } catch (error) {
        res.send(error.message);
    }
}

module.exports = usercontroller;