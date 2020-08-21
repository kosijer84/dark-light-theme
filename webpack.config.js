const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {

    watch: true,

    //define entry point
    entry: './src/js/main.js',

    //define output point
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "bundle.js",
        publicPath: '/',
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                filename: "index.html",
                template: "index.html",
            }
        )],

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /{node_modules}/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
                use: [
                    'file-loader',
                ]
            },
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        writeToDisk: true,
        port: 9000,
    }
}