const { resolve } = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'cheap-module-source-map',

  entry: {
    index: './src/index.js',
  },

  context: resolve(__dirname, './'),

  output: {
    path:              resolve(__dirname, 'dist'),
    publicPath:        '',
    filename:          '[name].js',
    sourceMapFilename: '[name].map',
    library:           '@deskpro/redux-components',
    libraryTarget:     'umd'
  },

  externals: [
    {
      react: {
        root:      'react',
        commonjs2: 'react',
        commonjs:  'react',
        amd:       'react'
      },
      'react-dom': {
        root:      'react-dom',
        commonjs2: 'react-dom',
        commonjs:  'react-dom',
        amd:       'react-dom'
      }
    }
  ],

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug:    false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle:   {
        screw_ie8:   true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
  ],

  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
