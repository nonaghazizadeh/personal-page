const path = require('path');
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );


module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js',
    styles: './src/style.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
            limit: 10000,
            name: "img/[hash].[ext]"
          },
          },
        ],
      },
    ],
  }
};
