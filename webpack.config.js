const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/my-react-app/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      publicPath: process.env.PUBLIC_URL || "/my-react-app/",
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/assets", to: "assets" },
        { from: "public/index.html", to: "404.html" },
      ],
    }),
    new webpack.DefinePlugin({
    "process.env.PUBLIC_URL": JSON.stringify(
        process.env.NODE_ENV === "production" ? "/my-react-app" : ""
    ),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    historyApiFallback: true,
    port: 3000,
  },
};