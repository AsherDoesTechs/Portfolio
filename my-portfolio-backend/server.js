// api/server.js
const express = require("express");
const serverless = require("serverless-http");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

module.exports.handler = serverless(app);
