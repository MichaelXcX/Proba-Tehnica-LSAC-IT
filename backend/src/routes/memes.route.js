const jwt = require('jsonwebtoken');
const express = require('express');
const Meme = require('../models/memes.model');
const checkIfLogged = require('../middlewares/auth.middleware');
const User = require('../models/user.model');

const router = express.Router();

router.post('/', checkIfLogged, async (req, res) => {
    try {
        const { description } = req.body;
        let meme = await Meme.findOne({ description: description });
        
        if(meme) {
            return res.status(400).send({ message: "Fii mai creativ wtf!"});
        }
        
        // Asta nu verifica deja middleware-ul tau?
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id });

        meme = new Meme({ userId: user._id, description: description });
        await meme.save();
        return res.status(200).send({ message: "Meme inregistrat cu succes" });
    } 
    catch(err) {
        console.error(err);
        return res.status(400).send({ message: "Server error" })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Aici poti folosi si findById(id)
        let meme = await Meme.findOne({ _id: id });
        
        if(!meme) {
            return res.status(400).send({ message: "Meme invalid"});
        }

        return res.status(200).send(meme);
    }
    catch(err) {
        console.error(err);
        return res.status(500).send({ message: "Server error" });
    }
});

// Nitpick: Daca ai un parametru/variabila si vrei sa indici faptul ca nu e folosita
// poti sa ii pui numele _
// In cazul asta req poate sa se numeasca _
router.get('/', async (req, res) => {
    try {
        let allMemes = await Meme.find({});
        
        // Nu cred ca are cum sa iti intoarca null, deci nu cred ca ai nevoie
        // neaparat de if-ul asta
        if(!allMemes) {
            return res.status(400).send({ message: "Avem o problema!"});
        }

        return res.status(200).send(allMemes);
    }
    catch(err) {
        console.error(err);
        return res.status(500).send({ message: "Server error" });
    }
});

router.patch('/:id', checkIfLogged, async (req, res) => {
    try {
        const { id } = req.params;
        let meme = await Meme.findOne({ _id: id });

        if(!meme) {
            return res.status(400).send({ message: "Meme invalid"});
        }

        // Yap, good catch =)))
        // TODO: Incearca sa implementezi verificarea posesorului meme-ului in middleware
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id });
        
        if(user._id.toString() !== meme.userId) {
            return res.status(400).send({ message: "Meme-ul nu iti apartine"});
        }

        const newDescription = req.body;
        console.log(req.body);
        // Nu cred ca mai ai nevoie de callback-ul de la final ca 
        // eroarea ar trebui sa o prinda catch-ul si daca pui await res.send se executa
        // dupa ce user-ul a fost updatat.
        await Meme.findOneAndUpdate({ _id: id }, newDescription, function(err, result) {
            if(err) return res.send(err);
            return res.status(200).send({ message: "Updated Meme!", res: result});
        }).clone();
    }

    catch(err) {
        console.error(err);
        return res.status(500).send({ message: "Server error" });
    }

});

router.delete('/:id', checkIfLogged, async (req, res) => {
    try {
        const { id } = req.params;
        let meme = await Meme.findOne({ _id: id });

        if(!meme) {
            return res.status(400).send({ message: "Meme invalid"});
        }

        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id });
        
        if(user._id.toString() !== meme.userId) {
            return res.status(400).send({ message: "Meme-ul nu iti apartine"});
        }

        await Meme.deleteOne({ _id: id});
        return res.status(200).send({ message: "Deleted Meme!" });
    }

    catch(err) {
        console.error(err);
        return res.status(500).send({ message: "Server error" });
    }
});



module.exports = router;