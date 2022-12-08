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

        const domain = "stud.acs.upb.ro";
        const emailDomain = email.split('@')[1];

        if(domain !== emailDomain) {
            return res.status(400).send("Mail-ul trebuie sa fie unul de student (@stud.acs.upb.ro)");
        }

        if(username.length > 32 && username.length < 8) {
            return res.status(400).send("Username-ul trebuie sa fie intre 8 si 32 de caractere!");
        }

        if(password.length > 32 && password.length < 8) {
            return res.status(400).send("Parola trebuie sa fie intre 8 si 32 de caractere!");
        }


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