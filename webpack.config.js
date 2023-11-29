const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    cache: false,
    entry: './src/index.js',
    module: {
        rules: [
            { test: /\.(css|scss|sass)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(js|jsx)$/, use: 'babel-loader' },
            { test: /\.(png|svg|jpg|gif)$/, loader: 'file-loader' }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html", favicon: "./public/favicon.png" })
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}

