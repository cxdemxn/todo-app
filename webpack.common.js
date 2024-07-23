const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/App.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'iam.todo',
            filename: 'index.html',
            template: 'src/app.html'
        })
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
            }
        ]
    }
}