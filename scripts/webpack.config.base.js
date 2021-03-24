const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports  = {
    mode:process.env.NODE_ENV == 'production' ? 'production' : 'development',
    output:{
        publicPath: '/',
        path:path.resolve(__dirname,'./../dist'),
        filename:'[name].js'
    },
    resolve: {
        extensions: ['.js', '.es', '.css', '.less'],
        alias:{
            '@':path.resolve('./../src')
        }
    },
    module:{
        rules:[
            {
            test: /\.(j|t)sx?$/,
            loader:'ts-loader',
            exclude:/node_modules/
        },{
            test:/\.css$/,
            use:['less-loader','css-loader']
        },{
            test:/\.less$/,
            use:['less-loader','css-loader','less-loader']
        },{
            test:/\.(jpg|png|gif|svg|jpeg)$/,
            use:['url-loader']
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: false,
            template:path.resolve(__dirname,'./../template/index.html')
        }),

    ]
}