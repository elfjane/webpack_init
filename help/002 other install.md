安裝
```
npm install cross-env --save-dev
```
webpack.config.js 調整

增加
```json
    "dev": "webpack --mode development",
    "watch": "webpack --mode development --watch",
    "deploy": "webpack --mode production",
```
如下
```json
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "main": "index.js",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --mode development",
    "watch": "webpack --mode development --watch",
    "deploy": "webpack --mode production",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "cross-env": "^7.0.3",
    "webpack": "^5.95.0",
    "webpack-cli": "^5.1.4"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

## 安裝 file-loader

```
npm install file-loader -save-dev
```
### 增加 html

```javascript
    module: {
        rules: [
            {
                test: /\.(html|htm)$/i,
                loader: ['file-loader'],
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
```

### 調整目錄位置
```javascript
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
```

### html 自動搬移
要能安裝 html 自動搬移，需要在 js 裡面加上 import 檔案，才會生效

```javascript
import "../index.html";
```
## 安裝 sass-loader

```
npm install sass-loader node-sass -save-dev
```

### 增加 sass
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
    },
```