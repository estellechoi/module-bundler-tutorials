// `webpack` command will pick up this config setup by default

// node.js 의 path 라이브러리를 가져오기
var path = require("path");
// mini-css-extract-plugin 라이브러리 가져오기
// var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "none",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		// __dirname : 현재 경로, __filename : 현재 파일명
		// path.resolve() method resolves a sequence of paths or path segments into an absolute path.
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	// plugins: [new MiniCssExtractPlugin()],
	// source-map makes it possible to refer to original source before minified
	devtool: "source-map",
};
