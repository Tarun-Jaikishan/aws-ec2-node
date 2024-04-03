const express = require("express");
const cors = require("cors");

const port = 8080;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  try {
    return res.status(200).json({ message: "Hello World" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    return res.status(200).json({ message: `Hello ${id}` });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, (req, res) => {
  console.log("Server Running");
});
