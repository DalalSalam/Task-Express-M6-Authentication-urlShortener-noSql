const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://dalaly2005:tKg4ZizAJcPDkGZK@fullstack.qkln8.mongodb.net/"
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
