import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";
import { resolve } from "path";
import sql from "mssql";

import { PORT, DB_CONFIG } from "./config.js";
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

const dbConfig = {
    user: DB_CONFIG.user,
    password: DB_CONFIG.password,
    server: DB_CONFIG.server,
    database: DB_CONFIG.database,
    options: {
      encrypt: true, // Si estás utilizando Azure SQL, asegúrate de habilitar esta opción
      trustServerCertificate: true // Si estás utilizando Azure SQL, puedes deshabilitar esta opción
    }
};

// Función para realizar una consulta a la base de datos
async function executeQuery(query) {
    try {
      await sql.connect(dbConfig);
      const result = await sql.query(query);
      return result.recordset;
    } catch (error) {
      console.error("Error al ejecutar la consulta:", error);
      throw error;
    } finally {
      sql.close();
    }
  }
  
  // Ejemplo de cómo utilizar la función executeQuery para realizar una consulta
  app.get("/consultar", async (req, res) => {
    try {
      const query = "SELECT * FROM TEST"; // Reemplaza 'TuTabla' por el nombre de tu tabla
      const data = await executeQuery(query);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: "Error al consultar la base de datos" });
    }
  });

server.listen(PORT);
console.log(`server on port ${PORT}`);

