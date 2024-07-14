const path = require('path');

module.exports = {
    entry: "./src/client/index.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
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
    }
}