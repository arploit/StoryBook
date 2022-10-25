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
				use: 'ts-loader',
				exclude: /node_modules/,
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
				test: /\.less$/,
				exclude: /\.module\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
			{
				test: /\.module\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[path][name]__[local]--[hash:base64:5]',
							},
						},
					},
					'less-loader',
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
