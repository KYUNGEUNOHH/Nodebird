const express = requre("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ id: 1, content: "hello" }]);
});

router.post("/", (req, res) => {
  res.json({ id: 1, content: "post1" });
});

module.exports = router;
