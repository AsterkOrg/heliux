const fs = require("fs");
const path = require("path");
const app = require('main.js');

function page(path, cb) {
  app.get(path, (req, res) => {
    res.send(cb());
  });
  app.listen(3000, () => {
    console.log("App Deployed");
  });
}

module.exports = { page };
