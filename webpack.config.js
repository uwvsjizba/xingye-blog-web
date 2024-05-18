const path = require("node:path");
const htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: "./src/main.js",

    output:{
        path: path.resolve(__dirname, "./dist"),
        filename: "./js/main.js"
    },

    module: {
        rules:[

        ]
    },
    
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html")
        })
    ],
    
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },

    devServer: {
        host: "localhost",
        port: "1125",
        open: true
    },

    mode: "development"
}