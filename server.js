//DOESN'T LOAD COMPONENTS. FIX. 

var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/www'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, //check
  publicPath: config.output.publicPath, //check. currently have as '/'
  hot: true,
  inline: true, //check
  filename: 'bundle.js', //added
  stats: {
  	colors: true,
  }, //added
  historyApiFallback: true, //added
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './www/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log(`Listening at http://localhost:${port}/`);
})