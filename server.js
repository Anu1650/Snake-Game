const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// set view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// static files (css, js, images)
app.use(express.static(path.join(__dirname, "public")));

// routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
