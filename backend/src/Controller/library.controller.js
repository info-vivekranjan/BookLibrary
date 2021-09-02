const express = require("express");
const Library = require("../Model/library.model");

const router = express.Router();

router.post("/", async (req, res) => {
  const library = await Library.create(req.body);
  return res.status(201).json({ data: library });
});

router.get("/", async (req, res) => {
  const library = await Library.find();
  return res.status(200).json({ data: library });
});

router.get("/:id", async (req, res) => {
  const library = await Library.findById(req.params.id);
  return res.status(200).json({ data: library });
});

router.delete("/:id", async (req, res) => {
  const library = await Library.findByIdAndDelete(req.params.id);
  return res.status(204).json({ data: library });
});

module.exports = router;
