const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist/'),
            
        },
        port: 2003,
        open: true,
        hot: true,
        watchFiles: {
            paths: [
                './src/app.html'
            ]
        }
    },
    performance: {
        maxAssetSize: 512000,
        maxEntrypointSize: 512000,
    },
});