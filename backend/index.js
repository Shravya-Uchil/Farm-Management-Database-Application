// SJSU CMPE 226 Fall 2020 TEAM3
// import the require dependencies
// import express module
var express = require('express');
// create express app
var app = express();
// express middleware body parser
var bodyParser = require('body-parser');
// express session
var session = require('express-session');
// cookie parser
var cookieParser = require('cookie-parser');
// Cross-origin resource sharing
var cors = require('cors');
app.set('view engine', 'ejs');

//use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(bodyParser.json());
app.use(cookieParser());

//use express session to maintain session data
app.use(
  session({
    secret: 'cmpe-226-project-2',
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000, // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000,
  })
);

//Allow Access Control
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,HEAD,OPTIONS,POST,PUT,DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
  );
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/', function (req, res) {
  res.send('Welcome!!');
});

const login = require('./routes/login');
const signup = require('./routes/signup');
const employee = require('./routes/employee');
const crop = require('./routes/crop');
const event = require('./routes/event');
const order = require('./routes/order');
const admin = require('./routes/admin');

app.use('/farm/login', login);
app.use('/farm/signup', signup);
app.use('/farm/employee', employee);
app.use('/farm/crop', crop);
app.use('/farm/event', event);
app.use('/farm/order', order);
app.use('/farm/admin', admin);

//start your server on port 3001
app.listen(3001);
console.log('server is up and listening on port 3001');

module.exports = app;
