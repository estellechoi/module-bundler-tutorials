// `webpack` command will pick up this config setup by default
// node.js 의 path 라이브러리를 가져온다.
var path = require("path");

module.exports = {
	mode: "none",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		// __dirname : 현재 경로, __filename : 현재 파일명
		// path.resolve() method resolves a sequence of paths or path segments into an absolute path.
	},
	// loader
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["css-loader"],
			},
		],
	},
	// source-map makes it possible to refer to original source before minified
	devtool: "source-map",
};
