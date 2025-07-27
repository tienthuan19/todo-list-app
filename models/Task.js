const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    isCompleted: {
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

// Auto update timestamp nếu mày cần thêm sau
// taskSchema.pre("save", function (next) {
//   this.updatedAt = new Date();
//   next();
// });

module.exports = mongoose.model("Task", taskSchema);
