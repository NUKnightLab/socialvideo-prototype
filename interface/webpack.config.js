const path = require('path');

module.exports = {
  context: path.join(__dirname, 'components'),
  entry: [
    './index.js',
    '../www/index.css'
],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loaders: ["style-loader","css-loader"]
      },
      {
      test: /\.(jpe?g|png|gif)$/i,   //to support eg. background-image property 
      loader:"file-loader",
      query:{
        name:'[name].[ext]',
        outputPath:'images/'
        //the images will be emmited to public/assets/images/ folder 
        //the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png); 
      }
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule 
      loader: "url-loader",
      query:{
        limit:'10000',
        name:'[name].[ext]',
        outputPath:'fonts/'
        //the fonts will be emmited to public/assets/fonts/ folder 
        //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }  
      }
    }

    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
