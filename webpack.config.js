const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
const publicPath = isProd ? "/my-react-app/" : "/";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: publicPath,
    clean: true, // clear dist folder on build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]", // ensure assets are copied to /assets/
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      publicPath: publicPath,
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/assets", to: "assets" },
        { from: "public/index.html", to: "404.html" },
      ],
    }),
    new webpack.DefinePlugin({
      "process.env.PUBLIC_URL": JSON.stringify(publicPath),
    }),
  ],
  devServer: {
    static: path.join(__dirname, "public"),
    historyApiFallback: true,
    port: 3000,
  },
};