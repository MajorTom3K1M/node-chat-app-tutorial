var socket = io(); // initiate the request keep connection open

socket.on('connect', function() {
  console.log('Connected to Server');
}); //listen event (event name are difference event difference)

socket.on('disconnect', function() {
  console.log('Disconnect from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});
