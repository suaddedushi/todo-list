const express = require('express');

//init app
const app = express();

app.get('/', function(req, res) {
	res.send("index page");
});

app.listen(3000, function () {
	console.log(" app running at http://localhost:3000");
});