// require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require('express')
const jwt = require("jsonwebtoken");
const router = express.Router()
const User = require("../models/User");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middlewares/verifyAuth.js");
router.use(express.json())


// Create user
router.post("/create-user", verifyTokenAndAdmin, async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        if (!(email && password && firstname && lastname))
            return res.status(400).send({ MSG: "All input is required" });

        const oldUser = await User.findOne({ email: email });
        if (oldUser)
            return res.status(400).send({ MSG: "User already exists, please login" });

        encryptedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            firstname,
            lastname,
            email: email.toLowerCase(),
            password: encryptedPassword,
            isAdmin: req.body.isAdmin || false,
        });

        const createdUser = {
            userid: newUser._id,
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
        }

        res.status(201).send(createdUser);
    } catch (err) {
        console.log(err);
    }
});


// Get all users
router.get("/get-users", verifyTokenAndAdmin, async (req, res) => {
    try {
        const QUERIES = req.query

        const users = await User.find(QUERIES, { password: 0 })

        if (!users.length)
            return res.status(409).send({ MSG: "No users found" });

        return res.status(201).send(users);
    } catch (err) {
        console.log(err);
    }
});


// Get Individual user
router.get("/get-user/:userid", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.userid)

        if (!user)
            return res.status(409).send({ MSG: "No user with given id" });

        const { password, ...userdetails } = user._doc;
        return res.status(201).send(userdetails);
    } catch (err) {
        console.log(err);
    }
});


// Update user
router.put("/update-user/:userid", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const user = await User.findById(req.params.userid)

        if (!user)
            return res.status(409).send({ MSG: "No user with given id" });

        const userdetails = {
            firstname: req.body.firstname || user.firstname,
            lastname: req.body.lastname || user.lastname,
            email: req.body.email || user.email,
            isAdmin: req.body.isAdmin || user.isAdmin,
        }

        if (req.body.password) {
            encryptedPassword = await bcrypt.hash(req.body.password, 10);
            userdetails.password = encryptedPassword || user.password
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.userid,
            userdetails,
            { new: true }
        );

        return res.status(200).send(updatedUser);
    } catch (err) {
        console.log(err);
    }
});


// Delete user
router.delete("/delete-user/:userid", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const user = await User.findById(req.params.userid)

        if (!user)
            return res.status(409).send({ MSG: "No user with given id" });

        const deletedUser = await User.findByIdAndDelete(req.params.userid)

        return res.status(200).send(deletedUser);
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;