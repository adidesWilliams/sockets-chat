 //PORT variable configured by heroku
 var PORT = process.env.PORT || 3000;

var express = require ('express');
//create new express app
var app = express();
//tell node to start a new server then use app as boilerplate 
var http = require ('http').Server(app);

//use express static to expose folder
//express static takes file path as only argument 
app.use(express.static(__dirname + '/public'));

//start server
http.listen(PORT, function (){
	console.log('Server started!');
})