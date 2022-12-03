const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

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
        next();
    }
    catch(err) {
        console.error(err);
        return res.sendStatus(401);
    }
}

module.exports = checkIfLogged;