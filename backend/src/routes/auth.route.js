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
        let errors = 0;
        if(username < 8 && username > 32) {
            errors.push(username);
        }
        if(password < 8 && password > 32) {
            errors.push(password);
        }
        
        if(errors.length > 0) 
            res.send(400).send({ message: "Wrong username or password!"});


        let user = await User.findOne({ username: username });
        if(!user) {
            res.status(400).send({ message: "User not found!" });
        }

        const match = await bcrypt.compare(password, user.password);
        if(!match) {
            res.status(400).send({ message: "Wrong Password!" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(200).send({ token });
    }
    catch(err) {
        console.error(err);
         res.status(400).send({ message: "User not found!" });
    }
});

router.post('/signup', async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const domain = "stud.acs.upb.ro";
        const emailDomain = email.split('@')[1];
        let errors = [];
        if(domain !== emailDomain) {
            errors.push(domain);
        }

        if(username.length > 32 && username.length < 8) {
            errors.push(username);
        }

        if(password.length > 32 && password.length < 8) {
            errors.push(password);
        }

        if(errors.length > 0)
            res.status(400).send({ message: "Invalid information!"}); 

        let user = await User.findOne({ email: email, username: username });

        if(user) {
            res.status(400).send({ message: "User deja creat" });
        }
        
        user = new User({ email, username, password });
        await user.save();
        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
        res.status(200).send({ token });
    }
    catch(err) {
        console.error(err);
        res.status(400).send({ message: "Eroare creare User" });
    }
});
router.post('/logout', tmp);

module.exports = router;