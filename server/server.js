const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, ".config.env") });

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-07-31&sortBy=publishedAt&apiKey=4877f256e77a4df0824dbff4e4c8b2d4"
    );

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data.articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
