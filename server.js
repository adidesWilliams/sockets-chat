 //PORT variable configured by heroku
 var PORT = process.env.PORT || 3000;

var express = require ('express');
//create new express app
var app = express();
//tell node to start a new server then use app as boilerplate 
var http = require ('http').Server(app);

//bring in http server with socket.io library
var io = require('socket.io')(http);

//use express static to expose folder
//express static takes file path as only argument 
app.use(express.static(__dirname + '/public'));

//on is to listen to event, first argument is name of the event
//access individual socket
io.on('connection', function(socket){
	console.log('User connected via socket.io');

	socket.on('message', function(message){
		console.log('message recieved: '+message.text);
		//sends received message to everyone but the sender
		socket.broadcast.emit('message', message);
	});

	//socket object, event method. event method takes two arguments
	//1st event name, 2nd data to send
	socket.emit('message', {
		text: 'Welcome to the chat app'
	});

});

//start server
http.listen(PORT, function (){
	console.log('Server started!');
})