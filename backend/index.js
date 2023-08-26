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

const messages = [];

io.on("connection", (socket) => {
  console.log("Usuario conectado");

  socket.on("message", (message) => {
    messages.push(message);
    io.emit("message", message);
  });

  socket.on("likes", ({ messageId, userId }) => {
    const messageToUpdate = messages.find((msg) => msg.messageId === messageId);
    if (messageToUpdate) {
      if (messageToUpdate.likes.includes(userId)) {
        messageToUpdate.likes = messageToUpdate.likes.filter((id) => id !== userId);
      } else {
        messageToUpdate.likes.push(userId);
      }
      io.emit("likes", messageToUpdate);
    }
  });

  socket.on("disconnect", () => {
    console.log("Usuario desconectado");
  });
});

server.listen(3000, async () => {
  console.log("Servidor escuchando en el puerto 3000");
  await AppDataSource.initialize();
  console.log("Conectado a la base de datos");

});
