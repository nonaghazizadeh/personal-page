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
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: 'resolve-url-loader',
            options: {sourceMap: true},
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
          {
            loader: 'sass-loader',
            options: {sourceMap: true},
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
      {
        test: /\.(ttf|woff|woff2|otf|eot)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                },
            },
        ],
    },
    ],
  }
};
