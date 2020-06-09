var express=require("express");
var socket=require('socket.io');

var app=express();

app.use(express.static('public'));

var server=app.listen(4000,function()
{
    console.log("working");
}); 

var io=socket(server);

io.on('connection',function(socket){
    console.log('made socket connection: '+socket.id);

     socket.on('chat',function(data){
        io.sockets.emit('chat',data);
     });

     socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
     });
});

