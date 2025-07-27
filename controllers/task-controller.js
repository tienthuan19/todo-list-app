const TaskService = require("../services/task-service.js");
const mongoose = require("mongoose");
const Task = mongoose.model("Task");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await TaskService.getAllTasks();
    const taskCount = tasks.length; // 👈 Đếm số task
    //render View EJS
    res.render("index", { tasks: tasks || [], taskCount });

    //JSON API
    // res.json(tasks);
  } catch (error) {
    console.error("Error getting tasks:", error);
    res.status(500).send("Server Error");
  }
};

exports.addTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required!" });
    }

    const newTask = await TaskService.createTask({ title });
    // res.status(201).json(newTask);
    res.redirect("/tasks");
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    // console.log(error);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await TaskService.deleteTask(id);
    res.redirect("/tasks");
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).send("Server error");
  }
};

// task-controller.js
// controllers/task-controller.js

exports.updateTask = async (req, res) => {
  const taskId = req.params.id;
  let completedValue = req.body.completed;

  if (Array.isArray(completedValue)) {
    completedValue = completedValue[completedValue.length - 1];
  }

  // Ensure this matches the field name in your Task.js model (e.g., isCompleted)
  const isCompleted = completedValue === "true";

  try {
    await TaskService.updateTask(taskId, { isCompleted: isCompleted });
    res.redirect("/tasks");
  } catch (err) {
    console.error("Update task error:", err);
    res.status(500).send("Error updating task");
  }
};
