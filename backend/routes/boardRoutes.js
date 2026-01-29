const express = require("express");
const Board = require("../models/Board");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

// Create a board
router.post("/", auth, async (req, res) => {
  const board = await Board.create({
    name: req.body.name,
    userId: req.user.uid,
  });
  res.json(board);
});

// Get all boards for user
router.get("/", auth, async (req, res) => {
  const boards = await Board.find({ userId: req.user.uid });
  res.json(boards);
});

// Delete board
router.delete("/:id", auth, async (req, res) => {
  await Board.findByIdAndDelete(req.params.id);
  res.json({ message: "Board deleted" });
});

module.exports = router;
