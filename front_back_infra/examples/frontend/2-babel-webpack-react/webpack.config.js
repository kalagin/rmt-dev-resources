const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  // настройка sourcemap для development-режима (локальный запуск)
  devtool: "eval-source-map",
  // точка входа в сборку
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  // обозначаем что хотим работать import/export с расширением jsx
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    // loaders - обработка файлов проекта
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
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
          from: path.resolve(__dirname, "src/index.html"),
          to: path.resolve(__dirname, "dist/index.html"),
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
