
## 安裝 file-loader
```
npm install file-loader --save-dev
```
### webpack.config.js 增加 html

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
