var socket = io(); // initiating request from client to server to open socket and stores into var

socket.on('connect',function (){
  console.log('Connected to server');
});

socket.on('disconnect', function (){
  console.log('Connected dropped/ Disconnected from Server');
});

socket.on('newEmail', function (email){
  console.log('New email arrived.', email); // prints email and its object data
});

socket.on('newMessage', function (message){
  console.log('New message arrived.', message); // prints email and its object data
});
