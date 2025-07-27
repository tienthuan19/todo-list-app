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
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
