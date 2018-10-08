const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'Example',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: [ path.resolve(__dirname, 'src')],
                query: {
                    presets: ['@babel/env', '@babel/react']
                },
                loaders: 'babel-loader'
            }
        ]
    },
    serve: {
        port: 1337,
        content: './dist',
    },
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000'
        },
        contentBase: path.join(__dirname, 'public'),
    }
};