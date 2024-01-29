import HtmlWebpackPlugin from 'html-webpack-plugin'
import { resolve as _resolve } from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

export default (env) => {
	return {
		mode: env.mode ?? 'development',
		entry: _resolve(__dirname, 'src', 'index.html'),
		output: {
			path: _resolve(__dirname, 'build'),
			filename: '[name].[contenthash].js',
			clean: true
		},
		plugins: [
			new HtmlWebpackPlugin({ template: _resolve(__dirname, 'src', 'index.html') })
		],
		module: {
			rules: [
				{
					test: /\.ts?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				},
				{
					test: /\.js?$/,
					use: 'babel-loader',
					exclude: /node_modules/
				},
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader', 'postcss-loader']
				},
				{
					test: /\.html$/i,
					use: 'html-loader'
				}
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js']
		},
		devServer: {
			historyApiFallback: true,
			port: 5001,
			open: true,
			contentBase: 'build',
			compress: true,
		},
		watch: true
	}
}