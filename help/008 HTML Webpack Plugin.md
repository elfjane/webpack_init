### Webpack 5

[](https://github.com/jantimon/html-webpack-plugin#webpack-5)

```shell
  npm i --save-dev html-webpack-plugin
```

```shell
  yarn add --dev html-webpack-plugin
```


**webpack.config.js**

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "index.js",
    output: {
        filename: './js/[name].js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                // test: /\.(html|htm)$/i,
                // loader: 'file-loader',
                // options: {
                //     name: '[path][name].[ext]',
                // },
            }
    },    
    plugins: [
        new HtmlWebpackPlugin({
            title: "index template",
            // Load a custom template (lodash by default)
            filename: './index.html',
            template: './html/index/index.html',
            chunks: ['index'],
        }),
    ],
}
```