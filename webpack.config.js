const path = require("node:path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const eslintWebpackPlugin = require("eslint-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require("webpack");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
// const postcss_pxtorem = require("postcss-pxtorem");


/**
 * 得到一个 Css Loader 处理数组
 * @param {String} pre 前置Loader
 * @returns {Array} 
 */
const getCssRuleUseList = (pre) => {
    return [
        // miniCssExtractPlugin.loader,
        "vue-style-loader",
        "css-loader",
        "postcss-loader",
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
                    {
                        test: /\.(png|jpg|gif)$/,
                        type: "asset/resource"
                    }
                    
                ],
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    // css: {
    //     loaderOptions: {
    //       postcss: {
    //         plugins: [
    //           // 兼容浏览器，添加前缀
    //           require("autoprefixer")({
    //             overrideBrowserslist: [
    //               "Android 4.1",
    //               "iOS 7.1",
    //               "Chrome > 31",
    //               "ff > 31",
    //               "ie >= 8",
    //               //'last 10 versions', // 所有主流浏览器最近10版本用
    //             ],
    //             grid: true,
    //           }),
    //           postcss_pxtorem({
    //             rootValue: 192, //设计稿宽度%10 比如 1920
    //             exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module|src)/
    //             propList: ["*"], //是一个存储哪些将被转换的属性列表，这里设置为["*"]全部，假设需要仅对边框进行设置，可以写]['*','!border*']
    //             //selectorBlackList :['.box'],//，那例如fs-xl类名，里面有关px的样式将不被转换，这里也支持正则写法。 
    //             replace: true, //替换包含rems的规则。
    //             mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
    //             minPixelValue: 0, //设置要替换的最小像素值(3px会被转rem)。 默认 0
    //           }),
    //         ],
    //       },
    //     },
    //   },
    plugins: [
        new miniCssExtractPlugin({
            filename: "static/css/[name].css",
            chunkFilename: "static/css/[name].chunk.css"
        }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            favicon:  path.resolve(__dirname, './public/favicon.png')
        }),
        new eslintWebpackPlugin({
            context: "./src",
            exclude: "node_modules"
        }),
        new VueLoaderPlugin({
            exclude: "node_modules"
        }),
        new DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
        })
    ],

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "/public")
        },
        port: 1125,
        open: true
    },

    mode: "development"
}