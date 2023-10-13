const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const path = require('path');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

const db = require('./config/keys').MongoURI;

if (db !== '[YOUR CONNECTION STRING HERE]') {
    mongoose
      .connect(
        db,
        { useNewUrlParser: true }
      )
      .then(() => console.log('MongoDB Connected'))
      .catch(err => console.log(err));
}

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Configure CORS
app.use(cors()); // This enables CORS for all routes

// Routes
app.use('/feedback', require('./routes/feedbackRoutes'));
app.use('/user', require('./routes/UserRoutes'));


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});