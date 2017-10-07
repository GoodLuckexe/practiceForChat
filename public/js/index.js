var socket = io(); // initiating request from client to server to open socket and stores into var

socket.on('connect',function (){
  console.log('Connected to server');

  socket.emit('createMessage', {
    to: 'm@glp.com',
    text: 'suh dudes'
  });
});

socket.on('disconnect', function (){
  console.log('Connected dropped/ Disconnected from Server');
});

socket.on('newEmail', function (email){
  console.log('New email arrived.', email); // prints email and its object data
});

socket.on('newMessage', function (message){
  console.log('New email arrived.', message); // prints email and its object data
});
