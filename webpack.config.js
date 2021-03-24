const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path  = require('path')
module.exports = {
    mode:process.env.NODE_ENV == 'production' ? 'production' : 'development',
    entry:{
        file1:'./src/index.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js',

    },
    devtool:'source-map',
    devServer:{
        hot: true,
        contentBase: path.join(__dirname,'dist'),
        historyApiFallback:{
            index:'./index.html'
        }

    },
    resolve:{
        alias:{
            "@": path.resolve(__dirname,'src'),
            "~": path.resolve(__dirname,'node_modules')
        },
        extensions: ['.ts','.tsx','.js','.json']
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
            template:'./src/template/index.html'
        }),
        //热更新
        new webpack.HotModuleReplacementPlugin()

    ]
}
 