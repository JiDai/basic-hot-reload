var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourcemaps: false
        })
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true
                }
            },
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            exclude: /node_modules/,
            include: __dirname
        }]
    }
}
