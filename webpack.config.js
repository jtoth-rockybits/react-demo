var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "src");
var OUTPUT = path.resolve(__dirname, "dist");

var config = {
    entry: DEV + "/index.jsx",
    output: {
        path: OUTPUT,
        filename: "mycode.js"
    },
    module: {
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets: ['es2015']
                }
            },
        ]
    }
};

module.exports = config;