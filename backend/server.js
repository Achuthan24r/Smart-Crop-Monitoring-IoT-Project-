const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/agri_iot");

const DataSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  soil: Number,
  flame: Number,
  time: { type: Date, default: Date.now }
});

const Data = mongoose.model("Data", DataSchema);

app.post("/api/data", async (req, res) => {
  const newData = new Data(req.body);
  await newData.save();
  res.json({ message: "Data Saved" });
});

app.get("/api/data", async (req, res) => {
  const data = await Data.find().sort({ time: -1 }).limit(10);
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
