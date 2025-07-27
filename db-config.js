const mongoose = require("mongoose");
require("dotenv").config();

// ✅ Import toàn bộ model ở đây luôn
require("./models/Task");
// Nếu có nhiều model: import hết ở đây
// require("./models/Post");
// require("./models/Comment");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log("✅ Connected to MongoDB");

    const Task = mongoose.model("Task");

    const newTask = new Task({
      title: "Hoàn thành app todo",
    });

    newTask
      .save()
      .then(() => console.log("🎉 Task saved!"))
      .catch((err) => console.error("💥 Error saving task:", err));
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
