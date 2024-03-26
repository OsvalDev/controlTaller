import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";
import { resolve } from "path";

import { PORT } from "./config.js";
import cors from "cors";

// Initializations
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: '*',
  },
});

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(resolve("frontend/dist")));

io.on("connection", (socket) => {
  console.log("Se ha conectado el cliente:", socket.id);
});

server.listen(PORT);
console.log(`server on port ${PORT}`);