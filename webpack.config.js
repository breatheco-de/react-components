const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: '../',
                hmr: process.env.NODE_ENV === 'development',
                },
            },
            'css-loader',
            ],
        },
        {
          test: /\.(png|jpg|svg|gif)$/, use: {
            loader: 'file-loader',
            options: { name: '[name].[ext]' }
          }
        }, //for images
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          use: 'url-loader'
        }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js',
    library: '@breathecode/ui-components',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
    libraryTarget: 'umd'
  },
  optimization: {
		// We no not want to minimize our code.
		minimize: false
	},
    plugins: [
        new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
        }),
    ],
  devServer: {
    contentBase: './dist'
  }
};