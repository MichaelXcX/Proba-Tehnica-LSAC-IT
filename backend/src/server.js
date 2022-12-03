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
    mongoose.connect(process.env.DB_URL, () => console.log('Conected to MongoDB!'));
}
catch(err) {
    console.error(err);
}
app.listen(process.env.PORT);