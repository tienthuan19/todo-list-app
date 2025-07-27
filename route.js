const taskRoutes = require("./routes/task-route");

module.exports = function (app) {
  app.use("/tasks", taskRoutes);
};
