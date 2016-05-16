
//LIBRARIES REQUIRED

//express framework
var express = require('express');
var app = express();
//mongo connector
var mongoose = require('mongoose');
//Passport
var passport = require('passport');
//Flash messages stored in session
var flash = require('connect-flash');
//log request to the log
var morgan = require('morgan');
//read cookies
var cookieParser = require('cookie-parser');
//get information from html forms
var bodyParser = require('body-parser');
//session
var session = require('express-session');

var PORT = process.env.PORT || 8080;

//DATABASE
var databaseConfig = require('./config/database.js');
mongoose.connect(databaseConfig.url);

//PASSPORT
require('./config/passport')(passport);

//APP USE
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
//Returns middleware that only parses urlencoded bodies. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.
app.use(bodyParser.urlencoded({ extended: true}));

//SETUP VIEW
app.set('view engine', 'ejs');

//SESSION SETUP
app.use(session({ secret: 'avenuecode-passport-training', resave: true, saveUninitialized: false }));
//secret - This is the secret used to sign the session ID cookie
//resave - Forces the session to be saved back to the session store, even if the session was never modified during the request. 
//saveUninitialized - Forces a session that is "uninitialized" to be saved to the store.
//https://www.npmjs.com/package/express-session

//PASSPORT SETUP
app.use(passport.initialize());
app.use(passport.session());

//FLASH MESSAGE SETUP
app.use(flash());


//ROUTES
require('./app/routes.js')(app, passport);

//LISTEN TO PORT
app.listen(PORT, function() {
    console.log("Open your browser at http://localhost:" + PORT);
});




