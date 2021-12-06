/**
 * @description 服务端入口
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-03 09:03:49
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
import fs from "fs";
import path from "path";
import express from "express";

import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App.jsx";
import fetchData from "../src/helpers/fetchData.js";

const app = express();
// app.use(express.static("dist"));
app.get("/*", (req, res) => {
  // const renderedString = renderToString(<App />);
  // useState，模拟获取数据
  const promise = fetchData();
  promise
    .then((data) => {
      const renderedString = renderToString(<App />);
      // function template() {
      //   return `
      //     <!DOCTYPE html>
      //     <html lang="en">
      //     <head>
      //       <meta charset="UTF-8">
      //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
      //       <meta http-equiv="X-UA-Compatible" content="ie=edge">
      //       <title>React Server Side Rendering</title>
      //     </head>
      //     <body>
      //       <div id="root">${renderedString}</div>
      //       <script>window.__ROUTE_DATA__ = ${JSON.stringify(data)}</script>
      //       <script src="/app.js"></script>
      //     </body>
      //     </html>
      //   `;
      // }
      // res.send(template());
      fs.readFile(path.resolve("public/index.html"), "utf-8", (error, data2) => {
        if (error) {
          res.send(`<p>Server Error</p>`);
          return false;
        }
        res.send(
          data2.replace(
            '<div id="root"></div>',
            `<div id="root">${renderedString}</div><script>window.__ROUTE_DATA__ = ${JSON.stringify(
              data
            )}</script>`
          )
        );
      });
    })
    .catch((reason) => {
      console.log(reason);
    });
});
app.listen(3030);
