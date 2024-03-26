const http = require('http');
const server = http.createServer();

const io = require('socket.io')(server, {
    cors: {origin : '*'}
})

io.on('connection', (socket) => {
    console.log('se ha conectado un cliente')
});

server.listen(3001);
