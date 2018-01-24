const express = require('express');

//init app
const app = express();

//views location

app.set('views', __dirname + '/views');

//set tempalte engine

app.set('view engine', 'ejs');

// setup mongodb

const MongoClient= require('mongodb').MongoClient;

const mongoURL = 'mongodb://localhost:27017/todolist';


//Connesting mongodb

MongoClient.connect(mongoURL, function (err, db) {
	if(err){
		console.log(err);
	}
	else{
		console.log(" database connect succsesfuly");

		todos = db.collection('todos');
	}
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/todos/:id', function(req, res) {
	res.render('show');
});

app.post('/todos/add', function (req,res) {
	res.redirect('/');
});

app.get('/todos/edit/:id', function(req, res) {
	res.render('edit');
});

app.post('/todos/update/:id', function (req,res) {
	res.redirect('/');
});

app.get('/todos/delete/:id', function (req,res) {
	res.redirect('/');
});





/*
app.get('/', function(req, res) {
	res.render("index", { name: " faqja fillestare", titulli: "index"});
});

app.get('/', function (req, res ) {
	res.render('manage');
});*/

app.listen(3000, function () {
	console.log(" app running at http://localhost:3000");
});