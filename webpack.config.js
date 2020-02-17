const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "css-loader",
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ]
      }
    ]
  }
};
