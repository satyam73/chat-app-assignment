require("dotenv").config();
import express, { Request, Response } from "express";
import { Server } from "socket.io";
const http = require("http");
const cors = require("cors");
import { User } from "./app.types";

const app = express();
const port = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL;
const server = http.createServer(app);
const dateInUnix = Date.now();
let activeUsers: User[] = [];

const io = new Server(server, {
  cors: {
    origin: FRONTEND_URL,
    credentials: true,
  },
});

app.use(express.json({ type: "application/json" }));
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// sockets code start
io.on("connection", (socket) => {
  console.log("connected to socket");

  socket.on("new-user-joined", (name) => {
    activeUsers.push({ name, id: socket.id });
    socket.broadcast.emit("user-joined", {
      newUser: { name, id: socket.id },
      activeUsers,
    });
    socket.emit("user-joined", {
      newUser: { name, id: socket.id },
      activeUsers,
    });
  });

  socket.on("send-message", (message) => {
    const selfUser: User | null =
      activeUsers.find((user) => user.id === socket.id) ?? null;
    socket.emit("receive-message", {
      message: message,
      user: selfUser,
      id: String(Math.random().toFixed(10) + Date.now()),
    });
    socket.broadcast.emit("receive-message", {
      message: message,
      user: selfUser,
      id: String(Math.random().toFixed(10) + Date.now()),
    });
  });

  socket.on("disconnect", () => {
    const selfUser: User | null =
      activeUsers.find((user) => user.id === socket.id) ?? null;
    activeUsers = activeUsers.filter((user) => user.id !== socket.id);
    socket.broadcast.emit("user-left", { leftUser: selfUser, activeUsers });
  });
});
// sockets code end

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "API is working fine!" });
});

app.get("/health", (req: Request, res: Response) => {
  const currentDateInUnix: number = Number(
    ((Date.now() - dateInUnix) / 1000).toFixed(2)
  );
  res.json({ uptime: currentDateInUnix });
});

server.listen(port, () => {
  return console.log(`Express server is listening at http://localhost:${port}`);
});
