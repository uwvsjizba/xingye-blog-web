const path = require("node:path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const eslintWebpackPlugin = require("eslint-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");


/**
 * 
 * @param {String} pre 前置Loader
 * @returns {Array} LoaderUse 数组
 */
const getCssRuleUseList = (pre) => {
    return [
        "vue-style-loader",
        "css-loader",
        pre
    ].filter(Boolean);
}



module.exports = {
    entry: "./src/main.js",

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./js/main.js"
    },

    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.s[ac]ss$/,
                        use: getCssRuleUseList("sass-loader")
                    },
                    {
                        test: /\.js$/,
                        loader: "babel-loader"
                    },
                    
                ],
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html")
        }),
        new eslintWebpackPlugin({
            context: "./src"
        }),
        new VueLoaderPlugin()
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