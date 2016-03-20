var name = getQueryVariable('name') ||'Anonymous';
var room = getQueryVariable('room');
var socket = io();

socket.on('connect', function(){

	console.log('connected to socket.io server');
});

//1st argument pass in custom event
//2nd argument call back function, pass in data
//listen for custom event emitted from server
socket.on('message', function(message){
	var momentTimestamp = moment.utc(message.timestamp);
	
	console.log('New Message');
	console.log(message.text);
	//$('.messages').append('<p><strong>'+ momentTimestamp.local().format('MMM Do YYYY, hh:mm a')+': </strong>'+message.text+'</p>');
	$('.messages').append('<p><strong>' +message.name+' '+ momentTimestamp.local().format('hh:mm a') + '</strong></p>');
	$('.messages').append('<p>'+message.text+'</p>');

});

//form to submit whatever user input is received
	$('#message-form').on("submit", function(event){
		event.preventDefault();

		var $message = $('input[name=message');

		//message gets sent with socket.emit
		socket.emit('message', {
			name: name,
			text: $message.val()
		});

		$message.val('');	

});