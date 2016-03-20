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
	$('.messages').append('<p>'+message.text+'</p>');

});

//form to submit whatever user input is received
	$('#message-form').on("submit", function(event){
		event.preventDefault();

		var $message = $('input[name=message');

		//message gets sent with socket.emit
		socket.emit('message', {
			text: $message.val()
		});

		$message.val('');	

});