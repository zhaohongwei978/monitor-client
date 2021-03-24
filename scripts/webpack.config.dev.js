const webpack = require('webpack')
const { merge } = require('webpack-merge');
const path = require('path')
const webpackBaseConfig = require('./webpack.config.base');
module.exports = merge(webpackBaseConfig,{
    entry:path.resolve(__dirname,'./../src/index.tsx'),
    devtool: 'source-map',
    plugins:[new webpack.HotModuleReplacementPlugin()]
})