const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// Aici o schema pe care ai putea sa o faci e sa modifici 
// req objectul tau
const checkIfLogged = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if(!token) {
        return res.status(401).send({ message: "Not authorized!" });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;
        const user = await User.findById(userId);
        if(!user) {
            return res.status(403).send({ message: "This user doesn't exist!" });
        }

        // Mai exact, aici ai putea sa faci ceva de genul asta
        // req.user = user;
        // si asta ar trebui sa modifice request-ul pentru toate middleware-urile
        // care se vor executa in viitor
        // Mai pe romaneste: codul de mai jos pe care tu vrei sa il extragi intr-un middleware
        /** 
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id });
        
        if(user._id.toString() !== meme.userId) {
            return res.status(400).send({ message: "Meme-ul nu iti apartine"});
        }
         */

        // poate sa ajunga:
        /**  
        if(req.user._id.toString() !== meme.userId) {
            return res.status(400).send({ message: "Meme-ul nu iti apartine"});
        } 
        */
       // si scapi de toate variabilele si toata logica pe care o faci

        next();
    }
    catch(err) {
        console.error(err);
        // Aici ai putea mai bine sa intorci 500 pentru ca daca iti intra
        // in catch-ul asta inseamna ca a fost o problema la mongoose sau la
        // jsonwebtoken, deci e o problema interna.
        // De asemenea, poti intoarce si aici un mesaj, for clarity
        return res.sendStatus(401);
    }
}

module.exports = checkIfLogged;