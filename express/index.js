const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config/config");
const app = express();
const port = 5000; // Порт для сервера

// Промежуточное ПО для обработки CORS-запросов
app.use(cors());
// Промежуточное ПО для парсинга JSON-запросов
app.use(express.json());
// Простой маршрут для тестирования
app.get("/", (req, res) => {
  res.send("Hello from Express server!");
});

// Подключение к MongoDB
const host = config.DB_HOST;
mongoose.connect(host);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Ошибка подключения к MongoDB:"));
db.once("open", () => {
  console.log("Соединение с MongoDB установлено");
});

const authRoute = require("./routes/index");
const fileRoute = require("./routes/file");

app.use("/auth", authRoute);
app.use("/profile", fileRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
