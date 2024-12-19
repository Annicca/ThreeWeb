const mongoose = require("mongoose");

// Настройки подключения к MongoDB
const uri = "mongodb://localhost:27017/testmongo"; // Укажите свою строку подключения MongoDB

async function mongoDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected successfully to MongoDB with Mongoose");
  } catch (err) {
    console.error("Connection to MongoDB failed", err);
    process.exit(1);
  }
}

module.exports = mongoDB;
