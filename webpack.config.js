const path = require("path");

module.exports = {
  // mode: "development",
  mode: "production",
  entry: path.resolve("./src/index.js"),
  output: {
    path: path.resolve("./dist"),
    filename: "live-jsx.js"
  }
};