// Task.js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    isCompleted: {
      // Đổi tên ở đây
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "Tasks" }
);

module.exports = mongoose.model("Task", taskSchema);
