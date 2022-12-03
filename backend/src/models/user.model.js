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