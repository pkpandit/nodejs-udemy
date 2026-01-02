const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.end("Home Page");
});
app.get("/contact", (req, res) => {
  res.end("You can contact me via email");
});

app.get("/tweets", (req, res) => {
  res.end("Here is your tweets");
});

app.post("/tweets", (req, res) => {
  res.status(201).end("Tweet posted successfully.");
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
