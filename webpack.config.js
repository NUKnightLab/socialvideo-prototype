var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './interface/components/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.(css)$/, use: [ 'style-loader', 'css-loader' ]}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'interface/index.html'
	})]
}