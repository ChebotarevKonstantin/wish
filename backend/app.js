const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const morgan = require('morgan')
const router = require('./routes/router');
const path = require('path');
const passport = require('passport');
require('dotenv').config()
require('./config/passport')(passport)
// const { createIwishDB } = require('./seeder');
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i7upe.mongodb.net/Iwish?retryWrites=true&w=majority`, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => console.log('Connected MongoAtlas'))
  .catch((err) => console.log('Don`t connected MongoAtlas',err));

app.use(express.static(path.join(__dirname, 'public', 'build')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
// createIwishDB();

app.use('/', router);




module.exports = app;

