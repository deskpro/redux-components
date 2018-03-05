const { resolve } = require('path');

const webpack = require('webpack');

const config = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    'webpack-dev-server': 'webpack-dev-server/client?http://localhost:4898',
    'only-dev-server': 'webpack/hot/only-dev-server',
    index:    './src/index.js'
  },

  output: {
    path:               resolve(__dirname, 'dist'),
    publicPath:         '/',
    filename:          '[name].js',
    sourceMapFilename: '[name].map',
    library:           '@deskpro/react-components',
    libraryTarget:     'umd'
  },

  context: resolve(__dirname, './'),

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },
};

module.exports = config;
