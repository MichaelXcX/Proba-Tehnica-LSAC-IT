const mongoose = require('mongoose');
const User = require('./user.model');
const Schema = mongoose.Schema;

const MemeSchema = new Schema({
    userId: {
        type: String,
        required: true,
        default: ""
    },
    description: {
        type: String,
        required: true
    }
})

const Meme = mongoose.model("Meme", MemeSchema);

module.exports = Meme;