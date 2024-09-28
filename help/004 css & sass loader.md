## 安裝 CSS Loader

CSS Loader 主要會把功能跟 js 包在一起的功能，前端基本都會使用這些功能
To begin, you'll need to install `css-loader`:

```console
npm install --save-dev css-loader style-loader
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```
## 安裝 sass-loader

```
npm install sass-loader node-sass --save-dev
```

### 增加 sass

use 的執行順序會先執行 sass-loader 再執行 css-loader 從下先執行，要注意順序

```javascript
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/i,
                use: ['css-loader', 'sass-loader'],
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],        
            {
                test: /\.(sass|scss)$/i,
                use: ['css-loader', 'sass-loader'],
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
```