const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.get("/", (reg, res) => {
  res.send("API is Running by ritik tyagi");
});

app.get("/api/chat", (reg, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (reg, res) => {
  // console.log(reg.params.id);
  const singleChat = chats.find((c) => c._id === reg.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server started on PORT ${PORT}`));
