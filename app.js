const express = require("express");
const connectDB = require("./db-config");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cấu hình view engine EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Để load CSS nếu có
app.use(express.static("public"));

// Database Connection
connectDB();

//Route
require("./route")(app);

app.listen(port, () =>
  console.log(`🚀 Server running at http://localhost:${port}`)
);
