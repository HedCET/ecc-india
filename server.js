const express = require("express");
const path = require("path");

const app = express();
const distDir = "dist/ecc-india";

app.use(express.static(path.join(__dirname, distDir)));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, distDir, "index.html"));
});

app.listen(process.env.PORT || 4200);
