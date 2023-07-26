const express = require("express");
const fs = require("fs");
const path = require("path");
const exApp = new express();

function page(path, cb) {
  exApp.get(path, (req, res) => {
    res.send(cb());
  });
  exApp.listen(3000, () => {
    console.log("App Deployed");
  });
}

// EXPERIMENTAL
function load(path) {
  let files = fs.readdirSync(path);
  files.forEach((file) => {
    let filePath = path.join(__dirname, file);
    console.log(filePath);
  });
}

module.exports = { page };
