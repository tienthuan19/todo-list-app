const TaskService = require("../services/task-service.js");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await TaskService.getAllTasks();

    //render View EJS
    res.render("index", { tasks: tasks || [] });

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
