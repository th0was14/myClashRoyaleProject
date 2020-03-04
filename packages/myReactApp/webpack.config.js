const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const jsonKey = require("./key.json");

module.exports = {
  entry: {
    app: "./src/app.tsx"
  },
  devtool: "inline-source-map",
  devServer: {
    open: "Chrome",
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "https://proxy.royaleapi.dev/v1",
        pathRewrite: { "^/api": "" },
        secure: false,
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: "json-loader"
      },
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
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ["dist"] }),
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin({
      API_KEY: JSON.stringify(jsonKey.key)
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [path.resolve(__dirname, 'src'), "node_modules"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public")
  }
};
