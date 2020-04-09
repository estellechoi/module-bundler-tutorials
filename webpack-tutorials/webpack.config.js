// `webpack` command will pick up this config setup by default

// node.js 의 path 라이브러리를 가져오기
var path = require("path");
// mini-css-extract-plugin 라이브러리 가져오기
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "none", // production, development
	entry: "./src/index.js",
	output: {
		filename: "[chunkhash].main.js",
		path: path.resolve(__dirname, "dist"),
		// __dirname : 현재 경로, __filename : 현재 파일명
		// path.resolve() method resolves a sequence of paths or path segments into an absolute path.
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				// sequence : right to left
				use: [
					// extract css file from main.js
					{ loader: MiniCssExtractPlugin.loader },
					// "style-loader",
					"css-loader",
				],
			},
		],
	},
	devServer: {
		port: 9000,
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: "index.html", // index.html 템플릿을 기반으로 빌드 결과물을 추가
		}),
	],
	// source-map makes it possible to refer to original source before minified
	// devtool: "source-map",
};
