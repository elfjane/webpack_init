## 安裝 PostCSS

PostCSS是一個透過JS插件轉換樣式的工具。這些外掛可以檢查你的 CSS、支援變數和 mixin、轉譯未來的 CSS 語法、內嵌圖像等等。

```console
npm install --save-dev postcss-loader autoprefixer
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
		{
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
		}
    ],
  },
};
```
## Then create `postcss.config.js`:

```js
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested')
  ]
}

module.exports = config
```