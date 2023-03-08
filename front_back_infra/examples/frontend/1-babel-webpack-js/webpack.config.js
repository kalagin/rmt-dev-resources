const path = require('path');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  // точка входа в сборку
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    // loaders - обработка файлов проекта
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    // Вариант 1: Копирование HTML файла из src
    // удобно, если мы разрабатываем без библиотек/фреймворков
    // Пример: vanilla js + dom
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/index.html'),
          to: path.resolve(__dirname, 'dist/index.html'),
        },
      ],
    }),
    // Вариант 2: Генерация HTML файла
    // хороший вариант, когда используем react/vuejs или шаблонизаторы handlebars/pug
    //new HtmlWebpackPlugin({
    //  title: "My App",
    //}),
  ],
};
