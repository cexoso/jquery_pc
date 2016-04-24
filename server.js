const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const express = require('express');
const webpackDevServer = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  quiet: false,
  historyApiFallback: true
})

webpackDevServer.app.use(express.static(__dirname + "/app"));
webpackDevServer.listen(3000, '0.0.0.0', function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:3000/');
  return void 0;
});
