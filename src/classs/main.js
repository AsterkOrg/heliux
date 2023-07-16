const express = require("express");
const fs = require("fs");
const exApp = new express();

//module.exports =
class Cble {
  constructor(p) {
    this.port = p.port || 8080;
    this.pageDir = p.pageDir;
    if (!p.pageDir)
      console.warn("page Directory not Loaded, load page from main file");

    /* FILE HANDLER*/
    //  let fileContent = fs.r

    /* LOGGING*/
    exApp.listen(p.port, () => {
      console.log(`App started on port ${p.port}`);
    });
  }

  page(path, cb) {
    exApp.get(path, (req, res) => {
      cb();
      res.send(cb);
    });
  }
}

/* TESTING | DONT USE THIS CODE! EXPERIMENTAL*/
/*
const app = new Cble({ port: 8080 });

app.page("/", () => {
  let count = 0;
  function sumCount() {
    let elCount = document.getElementId("count");
    elCount.innerHTML = elCount.innerHTML + 1;
  }

  return `
  <p id='count'></p>
  <button id='btnCount' onClick='${sumCount()}'>Count</button>
  `;
});
*/