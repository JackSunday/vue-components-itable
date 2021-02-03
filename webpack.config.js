const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
module.exports = {
	entry: './index.js', //./index.js
	devServer: {
		quiet: true,
		//compress:true,
		// port:1717
	},
	output: {
		//配置出口文件
		//filename: '[name].bundle.js', //配置输出文件名字的格式 下面的都要注释
		path: path.join(__dirname, './dist'), //输出的绝对路径 -----发布的时候要放开
		publicPath: '/dist/',//路径-----发布的时候要放开
		filename: 'jacksunday.js',//打包之后的名称-----发布的时候要放开
		library: 'jacksunday', // 指定的就是你使用require时的模块名-----发布的时候要放开
		libraryTarget: 'umd', // 指定输出格式-----发布的时候要放开
		umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define-----发布的时候要放开
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', 'ts', 'tsx'], // 新增了'ts', 'tsx'
    },
    externals:[nodeExternals()],
	performance: {
		hints: 'warning',
		//入口起点的最大体积
		maxEntrypointSize: 50000000,
		//生成文件的最大体积
		maxAssetSize: 30000000,
		//只给出 js 文件的性能提示
		assetFilter: function(assetFilename) {
			return assetFilename.endsWith('.js')
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				enforce: 'pre',
				loader: 'tslint-loader',
			},
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: 'vue-loader',
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					{
						loader: 'ts-loader',
						options: { appendTsxSuffixTo: [/\.vue$/] },
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.(less|css)$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'less-loader',
				],
			},
			{
				test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]',
				},
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
				messages: [
					'You application is running here http://localhost:8080',
				],
				notes: [
					'Some additionnal notes to be displayed unpon successful compilation',
				],
			},
			onErrors: function(severity, errors) {
				// You can listen to errors transformed and prioritized by the plugin
				// severity can be 'error' or 'warning'
			},
			// should the console be cleared between each compilation?
			// default is true
			clearConsole: true,

			// add formatters and transformers (see below)
			additionalFormatters: [],
			additionalTransformers: [],
		}),
	],
}
