const path = require('path');

console.log("resolve:", path.resolve(__dirname, "./src"));

module.exports = {
    context: path.resolve(__dirname, "./src"),
    entry: {
        index: './js/index.js',
    },
    output: {
        filename: './js/[name].js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.(html|htm)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    }
};