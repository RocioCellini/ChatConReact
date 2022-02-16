const express = require('express');
const http = require('http');
const app = express();
const servidor = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(servidor);

io.on('connection', socket => {
    socket.on('conectado', () => {
        console.log("usuario conectado");
    })
    socket.on('mensaje',(nombre,mensaje)=>{
        io.emit('mensajes', {nombre,mensaje});
    })
    socket.on('disconnect', ()=>{
        io.emit('mensajes', {servidor:"servidor", mensaje:"Ha abandonado la sala"})
    })
});

servidor.listen(3000, ()=> console.log("servidor inicializado"));




