/**
 * @description webpack入口
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-11-30 11:13:54
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
