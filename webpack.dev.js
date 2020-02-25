const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge( common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      // for scss
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
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
