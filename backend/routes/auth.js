// require("dotenv").config();
const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.use(express.json())

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;

const JWT_TOKEN_VALIDITY = "1000d"


router.post("/register", async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        if (!(email && password && firstname && lastname)) {
            return res.status(400).send({ MSG: "All input is required" });
        }

        const oldUser = await User.findOne({ email: email });
        if (oldUser) {
            return res.status(400).send({ MSG: "User already exists, please login" });
        }

        encryptedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            firstname,
            lastname,
            email: email.toLowerCase(),
            password: encryptedPassword,
            isAdmin: false,
            isActive: true
        });

        const userdetails = {
            userid: newUser._id,
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            isActive: newUser.isActive
        }

        const token = jwt.sign(
            userdetails,
            JWT_PRIVATE_KEY,
            { expiresIn: JWT_TOKEN_VALIDITY }
        );

        res.status(201).send({ userdetails, token });
    } catch (err) {
        console.log(err);
    }
});


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            return res.status(400).send({ MSG: "All input is required" });
        }

        const user = await User.findOne({ email: email })

        if (user && (await bcrypt.compare(password, user.password), (err) => {
            console.log(err)
        })) {
            const userdetails = {
                userid: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                isAdmin: user.isAdmin,
                isActive: user.isActive
            }

            const token = jwt.sign(
                userdetails,
                JWT_PRIVATE_KEY,
                { expiresIn: JWT_TOKEN_VALIDITY }
            );

            return res.status(200).send({ userdetails, token });
        }

        return res.status(400).send({ MSG: "Invalid Credentials" });
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;