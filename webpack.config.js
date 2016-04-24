const webpack = require("webpack");
const path = require("path");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel-loader",
            include: path.join(__dirname, 'app')
        },{
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        },
        {
            test: /.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        },
        {
            test: /\.html$/,
            loader: "html"
        }]
    },
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
            'webpack/hot/dev-server', // "only" prevents reload on syntax errors
            "./app/js/app.js"
        ]
    },
    output: {
        path: path.join(__dirname, '/app/bundle'),
        filename: "[name].bundle.js",
        publicPath: '/bundle/'
    },
    resolve: {
        alias: {
            "components": path.join(__dirname, './app/components')
        }
        // ,
        // extensions: ['', '.js', '.jsx']
    },
    compiler: {
        stats: {
            colors: true
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        })
        // ,
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false
        // })
        // ,
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': '"production"'
        // }),
    ],
    devtool: 'inline-source-map'
};
