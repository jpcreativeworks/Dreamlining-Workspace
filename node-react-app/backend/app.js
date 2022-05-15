var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

module.exports = app;
