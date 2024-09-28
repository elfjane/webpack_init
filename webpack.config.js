const path = require('path');

console.log("resolve:", path.resolve(__dirname, "./src"));

module.exports = {
    context: path.resolve(__dirname, "./src"),
    entry: {
        index: './index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
    },
};