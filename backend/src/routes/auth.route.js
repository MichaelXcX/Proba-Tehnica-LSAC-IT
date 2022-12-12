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
            // Not a problem, dar ceva de care sa fii aware in caz ca o sa apara probleme in alte proiecte
            // Cum am zis si atunci la demo: nu ai nevoie neaparat sa intorci 
            // ce intoarce res.send
            // In javascript nu e o problema pentru ca nu exista tipuri,
            // deci nu e neaparat gresit, dar daca vrei sa simulezi asta
            // poti face res.send si dupa separat return
            return res.status(400).send({ message: "User not found!" });
        }
        // Nitpick(daca iti cere in cerinta sa faci cum ai facut, sorry =))) ): 
        // Mic sfat de securitate, cand intorci bad request-uri la login, 
        // pune un mesaj de genul: Username-ul sau parola sunt gresite.
        // Ca tu nu prea iti doresti sa stie ce e gresit mai exact ca poate
        // sa fie cineva care incearca sa sparga contul persoanei si nu 
        // prea vrei sa aiba idee daca unul din parametrii e gresit
        const match = await bcrypt.compare(password, user.password);
        if(!match) {
            return res.status(400).send({ message: "Wrong Password!" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(200).send({ token });
    }
    catch(err) {
        console.error(err);
        // Again, aici ar trebui mai bine sa intorci 500 ca sa nu iti prinda
        // erori din mongoose sau ceva de genul
        return res.status(400).send({ message: "User not found!" });
    }
});

router.post('/signup', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        
        // Logica de validare ai putea sa o abstractizezi intr-un utilitar separat
        // numit validator
        // Pentru implementarea lui poti folosi ceva gen:
        // - Yup: https://www.npmjs.com/package/yup
        // - Joy: https://github.com/hapijs/joi
        // Sau ceva custom facut de tine
        // https://blog.logrocket.com/handle-data-validation-node-js-validatorjs/

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