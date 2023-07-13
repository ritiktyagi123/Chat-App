const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const {notFound , errorHandler} = require('./errorMiddleware/errorMiddleware')

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); // To accept Json data

app.get("/", (reg, res) => {
  res.send("API is Running by ritik tyagi");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server started on PORT ${PORT}`.yellow.bold));
