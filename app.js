 var express = require('express');
 var app = express();
 var bodyParser = require('body-parser')
 var mongoose = require('mongoose')
 var User = require('./models/users.js')
 var List = require('./models/lists.js')
 var passport = require('passport');
 var passportLocal = require('passport-local');
 var methodOverride = require('method-override');
 var expressSession = require('express-session');
 app.set('view engine', 'ejs')
 app.use(bodyParser.urlencoded({
     extended: true
 }));
 app.use(methodOverride('_method'))
 app.use(express.static(__dirname + '/public'));