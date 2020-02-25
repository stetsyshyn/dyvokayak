const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "assets"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css"
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: 'resolve-url-loader',
          }
          ,
          {
            loader: "sass-loader", 
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
});
