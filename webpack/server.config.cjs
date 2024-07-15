const path = require('path');
const externals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: "./src/server/index.js", 
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: [externals()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
}