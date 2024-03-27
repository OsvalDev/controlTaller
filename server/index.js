import express from 'express';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import { PORT } from './config.js';

import routes from './routes/routes.js';

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: {
        origin: '*',
    },
});

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

io.on('connection', (socket) => {
    console.log('Se ha conectado el cliente:', socket.id);
});

app.use('/', routes);

server.listen(PORT);
console.log(`Server running on port ${PORT}`);

