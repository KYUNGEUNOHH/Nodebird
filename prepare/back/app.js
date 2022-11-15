const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome!");
});

// 노드백
app.listen(3065, () => {
  console.log("server on!");
});
