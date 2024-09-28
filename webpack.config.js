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
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    }
};