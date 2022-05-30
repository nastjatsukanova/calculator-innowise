const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './main.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
        }),
    ],
    module: {
        extensions: ['js'],
        rules: [
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
        loaders: [
            {exclude: ['node_modules'], loader: 'babel', test: /\.js?$/},
            {loader: 'style-loader!css-loader', test: /\.css$/},,
          ],
    },
    resolve: {
        alias: {
          config$: './configs/app-config.js',
        },
    }
};
