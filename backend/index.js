
import express from "express";
import dotenv from "dotenv";
import dbConnect from "./DB/dbConnect.js";
import authRouter from './rout/authUser.js';
import messageRouter from './rout/messageRout.js';
import cookieParser from "cookie-parser";
import userRouter from './rout/userRout.js';
import path from "path";
import { app, server } from './Socket/socket.js'; 

const __dirname = path.resolve();

dotenv.config();

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.use('/api/auth', authRouter);
app.use('/api/message', messageRouter);
app.use('/api/user', userRouter);

app.use(express.static(path.join(__dirname, "/frontend")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// ✅ Start Server
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    dbConnect();
    console.log(`Server is working at http://localhost:${PORT}`);
});




