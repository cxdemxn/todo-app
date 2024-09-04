const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack')
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: './dist',
        proxy: [
            {
                '/api': 'http://localhost:5000',
            }
        ],
        // setupMiddlewares: (middlewares, devServer) => {
        //     if (!devServer) {
        //         throw new Error('webpack-dev-server is not defined')
        //     }

        //     devServer.app.use(
        //         '/api',
        //         createProxyMiddleware({
        //           target: 'http://localhost:5000',
        //           changeOrigin: true,
        //           router: {
        //                 '/api': 'http://localhost:5000/api'
        //           }
        //         })
        //       );

        //     return middlewares
        // },
        static: {
            directory: path.resolve(__dirname, 'dist/'),
            
        },
        port: 2003,
        // open: true,
        hot: true,
        // watchFiles: {
        //     paths: [
        //         './src/app.html'
        //     ]
        // }
        historyApiFallback: true,
    },
    performance: {
        maxAssetSize: 512000,
        maxEntrypointSize: 512000,
    },
    plugins: [
        new Dotenv({
            path: './.env.development'
        }),
    ],
});