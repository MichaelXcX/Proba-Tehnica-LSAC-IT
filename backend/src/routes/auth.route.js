const express = require('express');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

const tmp = () => {
    console.log("Momentan neimplementate")
}

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        let user = await User.findOne({ username: username });
        if(!user) {
            return res.status(400).send({ message: "User not found!" });
        }

        const match = await bcrypt.compare(password, user.password);
        if(!match) {
            return res.status(400).send({ message: "Wrong Password!" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(200).send({ token });
    }
    catch(err) {
        console.error(err);
        return res.status(400).send({ message: "User not found!" });
    }
});

router.post('/signup', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        let user = await User.findOne({ email: email, username: username });

        if(user) {
            return res.status(400).send({ message: "User deja creat" });
        }
        
        user = new User({ email, username, password });
        await user.save();
        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
        res.status(200).send({ token });
    }
    catch(err) {
        console.error(err);
        return res.status(400).send({ message: "Eroare creare User" });
    }
});
router.post('/logout', tmp);

module.exports = router;