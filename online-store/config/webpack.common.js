const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.ts', paths.public + '/shop_page/index.ts'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'Online Store',
      favicon: paths.src + '/assets/images/favicon.png',
      template: paths.src + '/index.html', // template file
      filename: 'index.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Online Store',
      favicon: paths.src + '/assets/images/favicon.png',
      template: paths.src + '/cart.html', // template file
      filename: 'cart.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Online Store',
      favicon: paths.src + '/assets/images/favicon.png',
      template: paths.src + '/checkout.html', // template file
      filename: 'checkout.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Online Store',
      favicon: paths.src + '/assets/images/favicon.png',
      template: paths.src + '/item.html', // template file
      filename: 'item.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Online Store',
      favicon: paths.src + '/assets/images/favicon.png',
      template: paths.src + '/shop.html', // template file
      filename: 'shop.html', // output file
    }),
    new HtmlWebpackPlugin({
      title: 'Online Store',
      favicon: paths.src + '/assets/images/favicon.png',
      template: paths.src + '/not_found.html', // template file
      filename: 'not_found.html', // output file
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // Watch TypeScript files
      { test: /.ts$/i, use: 'ts-loader' },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.ts', '.js'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}