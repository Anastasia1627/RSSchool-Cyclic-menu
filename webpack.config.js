const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: './src/app/index.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'scripts')
    },
    devtool: false,
    watch: true,
    plugins: [
        new webpack.SourceMapDevToolPlugin({})
    ]
};
