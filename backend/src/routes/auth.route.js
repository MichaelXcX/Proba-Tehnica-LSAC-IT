const express = require('express');
const User = require('../models/user.model');
const router = express.Router();

const tmp = () => {
    console.log("Momentan neimplementate")
}
router.get('/login', (req, res) => {
    console.log("Momentan neimplementate");
});

router.post('/login', (req, res) => {
    console.log(req.body);
});

router.post('/signup', async (req, res) => {
    try {
        const {email, username, password} = req.body;
        let user = await User.findOne({ email: email, username: username});
        if(user) {
            return res.status(400).send({ message: "User deja creat" });
        }
        user = new User({email, username, password});
        await user.save().then(data => {
            res.json(data);
        });
    }
    catch(err) {
        console.log(err);
        return res.status(400).send({ message: "Eroare creare User" });
    }
});
router.post('/logout', tmp);

module.exports = router;