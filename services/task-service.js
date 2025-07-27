const mongoose = require("mongoose");
const Task = mongoose.model("Task");

exports.getAllTasks = async () => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 }); // newest on top
    return tasks;
  } catch (error) {
    console.log(error);
  }
};

exports.createTask = async (data) => {
  const task = new Task(data);
  //console.log(data);
  return await task.save();
};
