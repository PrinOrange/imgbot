import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import * as webpack from 'webpack';
import NodemonPlugin from 'nodemon-webpack-plugin';

export const ApplicationDevelopmentConfiguration: webpack.Configuration = {
  entry: {
    index: './src/app/index.ts',
  },
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  target: 'node',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../build/dev'),
  },
  plugins: [
    new NodemonPlugin({
      delay: 2500,
    }),
  ],
};

export default ApplicationDevelopmentConfiguration;
