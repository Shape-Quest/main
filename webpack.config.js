const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        //JS and JSX
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      // For .css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Images, GIFs, and vector graphics
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            // loader: 'url-loader',
            loader: 'file-loader',
            options: {
              limit: 8192, // 8kb. Files smaller than this get inlined as base64
              fallback: 'file-loader', // Use file-loader as a fallback for larger images
              name: 'images/[name].[hash:8].[ext]', // The output path for the images when file-loader is used
            },
          },
        ],
      },
      // For mp3 files for sounds
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'sounds/',
        },
      },
      {
        test: /\.wav$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'sounds/',
        },
      },
    ],
  },
  plugins: [
    //plugin to creat html files to serve bundles
    new htmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    proxy: {
      '/api/**': 'http://localhost:3000',
    },
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx'],
  },
};
