const path = require("node:path");
const htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: "./src/main.js",

    output:{
        path: path.resolve(__dirname, "./dist"),
        filename: "./js/main.js"
    },

    modulle: {
        rules:[

        ]
    },
    
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html")
        })
    ],
    devServer: {
        host: "localhost",
        port: "1125",
        open: true
    },

    mode: "development"
}