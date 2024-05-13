const { Server } = require("socket.io");
const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log("user connected ", socket.id);
  const userId = socket.handshake.query.userId;
  if (userId !== undefined) {
    userSocketMap[userId] = socket.id;
  }
  socket.on("disconnect", () => {
    console.log("user disconnect", socket.id);
    delete userSocketMap[userId];
  });
});

const userSocketMap = {
    
}
const receiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

module.exports = { app, server, io, receiverSocketId };
