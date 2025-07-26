const express = require("express");
const connectDB = require("./db-config");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🧠 Kết nối DB + import model sẵn trong đó
connectDB();

// 📦 Lấy model từ mongoose sau khi đã require trong db-config
const Task = mongoose.model("Task");

const newTask = new Task({
  title: "Hoàn thành app todo",
  description: "Fix xong bug xong đi ngủ",
  dueDate: new Date(),
  priority: "high",
});

newTask
  .save()
  .then(() => console.log("🎉 Task saved!"))
  .catch((err) => console.error("💥 Error saving task:", err));

// 🧪 Route test
app.get("/tasks", (req, res) => {
  console.log("Hello");
});

app.listen(process.env.PORT, () =>
  console.log("🚀 Server running at http://localhost:3000")
);
