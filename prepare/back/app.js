const express = require("express");
const postRouter = require("./routes/post");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome!");
});

app.get("/api", (req, res) => {
  res.send("api page");
});

router.get("api/post", (req, res) => {
  res.json([{ id: 1, content: "hello" }]);
});

router.post("/api/post", (req, res) => {
  res.json({ id: 1, content: "post1" });
});

// 노드백
app.use("/post", postRouter);
app.listen(3065, () => {
  console.log("server on!");
});
