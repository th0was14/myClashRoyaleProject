const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
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
    historyApiFallback: true
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
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      API_KEY: JSON.stringify(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjI5NCwiaWRlbiI6IjIzMzMyNjE1MTkwMzIxNTYxNiIsIm1kIjp7fSwidHMiOjE1NDgzNTMxNDkyODZ9.MkQCF_kgr7P2ntlj2RNfmpMbJR_9K8kl600WHIOg9do"
      )
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [path.join(__dirname, "js/helpers"), "node_modules"]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
