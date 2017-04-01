var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, '.\\source\\build');
var APP_DIR = path.resolve(__dirname, '.\\source');

var config = {
    entry: {
        roguelike: [APP_DIR + "\\roguelikeJS.js" ]
    },
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader',
                query: 
                {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                include : APP_DIR,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: BUILD_DIR + 'style.css',
            allChunks: true
        })
    ]
}

module.exports = config;
