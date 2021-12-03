const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./server/index.js",
  output: {
    filename: "app.js",
    path: path.resolve("server/build"),
  },
  target: "node",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "server"),
        ],
        loader: "babel-loader",
        options: {
          presets: ["@babel/react", "@babel/preset-env"],
        },
        // query: {
        //   //babel的配置参数，可以写在.babelrc文件里也可以写在这里
        //   presets: ["@babel/react", "@babel/preset-env"],
        // },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // 从右到左执行，所以注意顺序
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
      filename: "index.html",
    }),
  ],
};
