const express = require("express");

const app = express();
const port = 8080 || process.env.PORT;

const jsonDir = path.join(__dirname, "json_data");

// API endpoint for getting a list of manga titles and links
app.get("/", async (req, res) => {
  try {
    res.json(");
  } catch (error) {
    res.status(500).json({ error: `An error occurred: ${error}` });
  }
});
