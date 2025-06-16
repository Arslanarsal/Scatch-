const jwt = require('jsonwebtoken')
const userScheme = require('../models/user.model.js')
const bcrypt = require('bcrypt');

const usercontroller = async function (req, res) {
    try {
        const { fullName, password, email, contact } = req.body;

        if (!fullName || !password || !email || !contact) {
            return res.send("All fields are required");
        }
        if (await userScheme.findOne({ email })) {
            res.status(201).send("You alraey have account please login")
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = await userScheme.create({
            fullName,
            password: hash,
            email,
            contact
        });

        const token = jwt.sign({ email: email, id: user._id }, process.env.JWT_TOKEN);
        res.cookie("token", token);

        res.send(user);
    } catch (error) {
        res.send(error.message);
    }
}

const loginController = async function (req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).send("All field required")
        }
        let user = await userScheme.findOne({ email });
        if (!user) {
            return res.status(400).send("Email or password incorrect")
        }
        console.log(user);

        await bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
                res.send("Error to generate password")
            }
            const token = jwt.sign({email: email , id : user._id} , process.env.JWT_TOKEN)
            res.cookie("token" , token);
            return res.send("You can login");
        })
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = { usercontroller, loginController };