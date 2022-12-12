const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    }
});

// Super tare ca folosesti feature-uri din mongoose
// ca sa modularizezi codul si sa ascunzi logica inutila

// Daca ai avea in aplicatia ta database logic si mai complex
// ai putea sa faci chiar un layer separat, numit repository
// layer care sa abstractizeze si mai mult actiunile legate de mongoose
// Iti las aici un link care arata un exemplu: https://github.com/felipeblini/node-api-mongoose-repository-pattern
UserSchema.pre('save', async function(next) {
    var user = this;

    if(!user.isModified('password')) 
        return next();

    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    }
    catch(err) {
        return next(err);
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;