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

io.on('connection', (socket) => { //called w/ socket
  // ()=> is a call back function in second parameter to let you do something after connection
  console.log('New user connected');

  socket.on('disconnect', () =>{
    console.log('User has disconnected.');
  });
}); //method lets you register an event listener, connection = most simplest


server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
