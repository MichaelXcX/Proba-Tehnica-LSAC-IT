require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth.route');
const memesRoute = require('./routes/memes.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/auth', authRoute);
app.use('/memes', memesRoute);

try {
    // Aici ai putea sa folosesti o valoare default pentru debug ca sa nu mai setezi
    // manual asta in .env(process.env.DB_URL || "mongod:localhost:3000/db")
    mongoose.connect(process.env.DB_URL, () => console.log('Conected to MongoDB!'));
}
catch(err) {
    console.error(err);
}
// Si pentru port ar merge valoare default(tot pentru dev reasons)
app.listen(process.env.PORT);