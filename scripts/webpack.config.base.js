const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');
module.exports = {
    mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './../dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.es', '.css', '.less'],
        alias: {
            '@': path.resolve('./../src')
        }
    },
    module: {
        rules: [{
            test: /\.(j|t)sx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            include: [path.resolve(__dirname, './../src')]
        },
        {
            test: /\.(j|t)sx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            include: [path.resolve(__dirname, './../src')]
        },
        {
            test: /\.css$/i,
            include: path.resolve(__dirname, "./../src"),
            use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        // 针对antd的样式文件进行处理
        {
            test: /\.less$/,
            include: path.resolve(__dirname, './../src'),
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        import: true,
                        importLoaders: 1,
                        esModule: true,
                        modules: {
                            compileType: "module",
                            mode: "local",
                            exportLocalsConvention: "camelCaseOnly",
                        },
                    },
                },
                {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            javascriptEnabled: true,
                            modifyVars: {},
                        },
                    },
                }]
        },
        //针对antd单独处理
        {
            test: /\.(css|less)$/i,
            include: path.resolve(__dirname, "./../node_modules"),
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: "less-loader",
                    options: {
                        lessOptions: {
                            javascriptEnabled: true,
                            modifyVars: {},
                        },
                    },
                }
            ],
        },
        {
            test: /\.(jpg|png|gif|svg|jpeg)$/,
            use: ['url-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: false,
            template: path.resolve(__dirname, './../template/index.html')
        }),
        new MiniCssExtractPlugin({ ignoreOrder: false }),

    ]
}