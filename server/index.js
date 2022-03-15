const http = require("http");
const app = require("./app");
const express = require("express");
const app = express();

const PORT = process.env.API_PORT || 8080;
  
app.get("/", (req, res) => {
  res.json({good: "good stuff"})
});
  
app.get("/api", (req, res) => {
  res.json({ isLoggedIn: true});
});

  
app.listen(PORT, console.log(`Server started on port ${PORT}`));