const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/task-controller");

// Route "/tasks"
router.get("/", TaskController.getTasks);

module.exports = router;
