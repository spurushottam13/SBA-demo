const fs = require("fs");
const path = require("path");

// File destination.txt will be created or overwritten by default.
fs.copyFile(
  path.resolve(__dirname, "./public/iframe.html"),
  path.resolve(__dirname, "./dist/iframe.html"),
  (err) => {
    if (err) throw err;
    console.log("Copied Iframe File");
  }
);
