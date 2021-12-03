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

const app = express();
app.get("/*", (req, res) => {
  const renderedString = renderToString(<App />);
  fs.readFile(path.resolve("public/index.html"), "utf-8", (error, data) => {
    if (error) {
      res.send(`<p>Server Error</p>`);
      return false;
    }
    res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${renderedString}</div>`
      )
    );
  });
});
app.listen(3030);
