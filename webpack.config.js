const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
  entry:{
    app: './src/in.js'
  },
  output:{
    filename:'[name].js',
    path: path.resolve(__dirname,'./dist'),


  },
  module:{
    rules:[{
      test:/\.js$/,
      loader:'babel-loader',
      exclude:'/node_modules/'
    },
    {
      // scss
      test: /\.scss$/,
      use: [
        'style-loader',
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: { sourceMap: true }
    }, {
      loader: 'postcss-loader',
      options: { sourceMap: true }
    }, {
      loader: 'sass-loader',
      options: { sourceMap: true }
    }
      ]
    },
    {
      test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]'
      }
    },

    {
      test: /\.css$/,
      use: [
        'style-loader',
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: { sourceMap: true }
    }, {
      loader: 'postcss-loader',
      options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
    }
      ],
    },
  ]
  },
  devServer:{
    overlay:true
  },
  plugins: [new MiniCssExtractPlugin(
    {filename:"[name].css"}
  )

]
}
