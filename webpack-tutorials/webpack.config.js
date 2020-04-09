// `webpack` command will pick up this config setup by default
// path.resolve() method resolves a sequence of paths or path segments into an absolute path.
// __dirname : 현재 경로, __filename : 현재 파일명

// 라이브러리 가져오기
var path = require("path");
var webpack = require("webpack");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "none", // production, development
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"), // output path
		publicPath: "/dist/", // prefixed to every URL of resources like images, created by the runtime or loaders.
		filename: "[chunkhash].main.js",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				// sequence : last to first
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					"style-loader",
					"css-loader",
				],
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/, // exclude .js files under this path.
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: "file-loader",
				options: {
					name: "[name].[ext]?[hash]",
				},
			},
		],
	},
	resolve: {
		// 별칭 설정
		alias: {
			vue$: "vue/dist/vue.esm.js",
		},
		// 파일 확장자를 생략 가능하도록 설정
		extensions: ["*", ".js", ".vue", ".json"],
	},
	devServer: {
		port: 9000,
		historyApiFallback: true,
		noInfo: true,
		overlay: true,
	},
	performance: {
		hints: false, // 성능 관련 warning 으로 힌트를 주는 속성
	},
	plugins: [
		new MiniCssExtractPlugin(), // extract css file from main.js
		new HtmlWebpackPlugin({
			template: "index.html", // 기존의 index.html 에 빌드 결과물을 추가
		}),
	],
	devtool: "#eval-source-map", // source-map makes it possible to refer to original source before minified
};

// webpack 버전 4 부터 아래 코드는 mode: 'production' 으로 대체한다.

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }
