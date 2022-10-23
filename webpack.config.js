const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.tsx',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'babel-loader',
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
			{
				test: /\.(png|jpg|gif|svg)$/i,
				type: 'asset/inline',
			},
			{
				test: /\.(less|module.less)$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: {
								localIdentName: '[name]__[local]___[hash:base64:5]',
							},
						},
					},
					{ loader: 'less-loader' },
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './public/index.html' }),
		new MiniCssExtractPlugin({
			filename: './src/yourfile.css',
		}),
	],
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
		port: 4073,
		hot: true,
	},
};
