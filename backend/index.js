const http = require("http");
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const loginRouter = require("./routers/login.router");
const { AppDataSource } = require("./utils/connection");


const app = express();
app.use(express.json());
app.use(cors());
app.use(loginRouter);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("Usuario conectado");

  // Manejar mensajes del cliente
  socket.on("message", (message) => {
    console.log(`Mensaje recibido: ${message}`);

    // Enviar el mensaje a todos los clientes conectados
    io.emit("message", message);
  });

  // Manejar desconexiones de clientes
  socket.on("disconnect", () => {
    console.log("Usuario desconectado");
  });
});

server.listen(3000, async () => {
  console.log("Servidor escuchando en el puerto 3000");
  await AppDataSource.initialize();
  console.log("Conectado a la base de datos");
});
