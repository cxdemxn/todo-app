const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/App.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        clean: true,
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'iam.todo',
            filename: 'index.html',
            template: 'src/app.html'
        }),
        // new webpack.HotModuleReplacementPlugin(),
        // new Dotenv({
        //     path: './.env.production'
        // }),
        // new webpack.DefinePlugin({
        //     'process.env': JSON.stringify(process.env)
        // })
    ],
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|jpeg|jpg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                  },
                },
            }
        ]
    }
}