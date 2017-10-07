const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function (socket) { //called w/ socket, usually only one io. on call
  // ()=> is a call back function in second parameter to let you do something after connection
  console.log('New user connected');

  socket.emit('newMessage', { // second argument = object, so we can send many datas
    from: 'siueric@gmail.com',
    text: 'hi guys',
    createAt: 123
  });
  socket.on('createMessage', (newMessage) => { // the thing in the 2nd argument's parentheses is the event
    console.log('createMessage', newMessage);
  });
  socket.on('disconnect', () => {
    console.log('User has disconnected.');
  });

}); //method lets you register an event listener, connection = most simplest


server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
// If in node code, you can use => instead of function
