 var express = require('express');
 var app = express();
 var bodyParser = require('body-parser')
 var mongoose = require('mongoose')
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

 mongoose.connect('mongodb+srv://vrajdugar:Prasad@1101@todocluster-r2fqe.mongodb.net/TodoManager?retryWrites=true', {
     useNewUrlParser: true,
     useCreateIndex: true
 });

 app.listen(3002, function () {
     console.log("todo manager is up and running!")
 })

 app.get('/', function (req, res) {
     res.redirect('/lists')
 })

 app.get("/lists", function (req, res) {
     List.find({}, function (err, lists) {
         res.render("index", {
             lists: lists
         });
     })
 })

 app.get("/lists/new", function (req, res) {
     res.render("newTodo");
 })

 app.post("/lists", function (req, res) {
     List.create(req.body.list, function (err, list) {
         res.redirect("/lists")
     })
 })