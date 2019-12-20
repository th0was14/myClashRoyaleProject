const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/app.tsx"
  },
  devtool: "inline-source-map",
  devServer: {
    // host: "10.0.0.3",
    // contentBase: "./",
    open: "Chrome",
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "https://api.royaleapi.com",
        pathRewrite: {"^/api" : ""},
        secure: false,
        changeOrigin: true
      },
     }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      API_KEY: JSON.stringify(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjI5NCwiaWRlbiI6IjIzMzMyNjE1MTkwMzIxNTYxNiIsIm1kIjp7InVzZXJuYW1lIjoidGgwd2FzIiwiZGlzY3JpbWluYXRvciI6Ijk5MjAiLCJrZXlWZXJzaW9uIjozfSwidHMiOjE1NzY3OTMxMzk5OTR9.hA8BY8YpuCgRNZFGj1jrsRI4ua64PsMzMKekKbDk0ls"
      )
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [path.join(__dirname, "js/helpers"), "node_modules"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public")
  }
};
