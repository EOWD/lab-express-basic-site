const express = require("express");
const app = express();
const PORT = 5600;

app.use(express.static(__dirname + "/public"));

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/view/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/view/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/view/works.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/view/gallery.html");
  console.log(__dirname);
});

app.listen(PORT, () => {
  console.log("connected");
});

console.log("hello");
