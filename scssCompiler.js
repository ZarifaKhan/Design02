"use strict";
let sass = require("node-sass");
let fs = require("fs");
let path = require("path");

let input = path.resolve(__dirname, "assets/styles/style.scss");
let output = path.resolve(__dirname, "assets/styles/css/style.css");

sass.render(
  {
    file: input,
    outFile: output, //Used for Sourcemap
    outputSytle: "expanded",
  },
  (err, result) => {
    if (err) throw err;

    fs.writeFile(output, result.css, (err, result) => {
      if (err) throw err;
      console.log("CSS Compile Complete");
    });
  }
);
