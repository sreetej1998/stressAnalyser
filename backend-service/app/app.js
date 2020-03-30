import express from 'express';
var app=express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('sreetej');
});

io.on('connection', function(socket){

    socket.on('enterRoom',(room)=>{
        socket.join(room);
    })

  socket.on('chat',(payload)=>{
      console.log(payload);
    //   io.sockets.to('room').emit('chat',payload);
      socket.broadcast.to('room').emit('chat',payload)
      
  })
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});