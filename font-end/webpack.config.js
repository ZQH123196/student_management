// webpack 真是我是用过最难用的东西
// 请使用绝对路径
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// vue-loader在15之后需要在webpack.config.js中当插件引入
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  module: {
    // mode: 'development',
    // entry: path.join(__dirname, './src/index.js'),
    rules: [{
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'), // src 目录下的才需要经过 babel-loader 处理
        ],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[name]-image.[ext]'
          } // name 进入的图片名，ext 文件的扩展名
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 配置输出文件名和路径
      template: 'src/assets/index.html', // 配置文件模板
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, // 一切服务都启用 gzip 压缩：
    port: 8999,
    host: '127.0.0.1',
    stats: "errors-only", // 仅输出错误
    inline: true,
    // hot: true,
    open: true

  }
}