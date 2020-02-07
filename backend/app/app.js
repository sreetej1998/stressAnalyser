var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('Alive');
});

io.on('connection', function(socket){

  console.log('a user connected');
  socket.on('room',(msg)=>{
    socket.join(msg);
  })
  socket.on('chat', function(msg){
    console.log('message: ' + msg);
    socket.emit('chat', msg);
  });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});