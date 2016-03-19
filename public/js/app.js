var socket = io();

socket.on('connect', function(){

	console.log('connected to socket.io server');
});

//1st argument pass in custom event
//2nd argument call back function, pass in data
//listen for custom event emitted from server
socket.on('message', function(message){
	console.log('New Message');
	console.log(message.text);

});