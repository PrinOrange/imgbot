const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const WebpackProductionConfiguration = {
  entry: {
    index:"./src/app/index.ts",
  },
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  target: "node",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../build"),
  },
};

module.exports = WebpackProductionConfiguration;