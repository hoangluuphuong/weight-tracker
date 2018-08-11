const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Weight Tracker",
      // Load a custom template (lodash by default see the FAQ for details)
      template: "./src/index.html"
    })
  ]
};
